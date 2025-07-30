# How to Integrate Rapise into a DevOps Pipeline

## SpiraTest (recommended)

For test management and execution, we recommend using [SpiraTest](https://www.inflectra.com/SpiraTest/). Check out the [integration guide](/Guide/spiratest_integration/) and [demonstration video](https://youtu.be/5ybrBQOzez8).

## Microsoft Tools

If you use Azure DevOps or TFS, we also have a solution:

- Azure DevOps integration v3 [manual](../Guide/vstest.md) and [video](https://youtu.be/BIgOIxkZ5Hk?t=507)
- [RapiseLauncher Extension](../Guide/vstest_rl.md) for Azure DevOps

## Jenkins (and all others)

Rapise has a command-line interface and produces test reports in XML and text formats. This enables integration with other tools. Refer to the [Jenkins integration](https://www.inflectra.com/Support/KnowledgeBase/KB300.aspx) guide as an example.

## Linux / MacOS / Docker

Rapise 8.5 introduces support for an NPM package that contains both the Rapise execution engine and RapiseLauncher. The package is distributed as a .tgz file that can be installed from a URL or a local file. For the following examples, we'll refer to this package file as `rapise.tgz`.

### Installation

=== "From URL"
    ```
    npm install <url to rapise.tgz>
    ```
=== "From File"
    ```
    npm install <path to rapise.tgz>
    ```

### How it Works

#### Running a Rapise Test

To run a single Rapise test, execute the following command:

```
npx rapise <path to .sstest>
```

#### Running RapiseLauncher

Before using RapiseLauncher for the first time, you must obtain a `RepositoryConnection.xml` file from a Windows machine where your [Spira connection credentials](../Guide/spiratest_integration.md#spiratest-server-connection) have been configured. After obtaining the file, you can edit it directly to change any configuration property except the API Key.

If `RepositoryConnection.xml` is in the same directory as your project or located in `~/.rapise`, you can launch RapiseLauncher with a simple command:

```
npx rapiselauncher
```

If the configuration file is in a different location, use the `--config` flag to specify its path:

```
npx rapiselauncher --config <path to RepositoryConnection.xml>
```

Running RapiseLauncher without any test set IDs starts it in polling mode. In this mode, it continuously checks the connected SpiraTest instance for new jobs to execute.

To run specific test sets and then exit, pass their IDs on the command line:

```
npx rapiselauncher -t 100,101,102
```

##### Command Line

```
Usage: npx rapiselauncher [options]

Options:
  -c, --config   Path to RepositoryConnection.xml
      --param    Set a global variable (e.g., --param g_enableVideoRecording=true)
  -p, --project  Project ID
  -t, --testset  Test Set ID (comma-separated list)
      --windows  Run in Windows mode
      --details  Print results on exit
  -h, --help     Show help
```

### CI/CD Integration

Below are sample .yml files for running Rapise tests with AWS CodeBuild, Azure DevOps, GitHub Actions, and Docker.

Web tests are typically run in headless mode. If GUI emulation is required (i.e., for non-headless execution), you will need to install a virtual framebuffer like [Xvfb](https://x.org/releases/X11R7.7/doc/man/man1/Xvfb.1.xhtml) on the execution machine.

#### AWS CodeBuild

=== "buildspec.yml"
    ```
    version: 0.2

    phases:
      install:
        runtime-versions:
          nodejs: 22
        commands:
          - echo "Installing Rapise..."
          - npm install rapise.tgz

      build:
        commands:
          - echo "Starting UI tests in headless mode..."
          - npx rapiselauncher -c RepositoryConnection.xml -t 925 --details --param "g_browserLibrary=Selenium - ChromeHeadless"
    ```

#### Azure DevOps

=== "headless-pipeline.yml"
    ```
    trigger: none

    pool:
      vmImage: ubuntu-latest

    steps:
    - script: lsb_release -a
      displayName: 'Print OS Version'

    - task: NodeTool@0
      inputs:
        versionSpec: '22.x'
      displayName: 'Install Node.js 22'

    - script: |
        echo "Installing Rapise..."
        npm install rapise.tgz
      displayName: 'Install Rapise'
      workingDirectory: $(Build.SourcesDirectory) # Ensure working directory is the root of the repo

    - script: |
        echo "Launching Rapise..."
        npx rapiselauncher -c RepositoryConnection.xml -t 925 --details --param "g_browserLibrary=Selenium - ChromeHeadless"
      displayName: 'Run Rapise Launcher'
      workingDirectory: $(Build.SourcesDirectory) # Ensure working directory is the root of the repo    
    ```
=== "xvfb-pipeline.yml"
    ```
    trigger: none

    pool:
      vmImage: ubuntu-latest

    steps:
    - script: lsb_release -a
      displayName: 'Print OS Version'

    - task: NodeTool@0
      inputs:
        versionSpec: '22.x'
      displayName: 'Install Node.js 22'
    
    - script: |
        sudo apt-get update
        sudo apt-get install -y xvfb
      displayName: 'Install Xvfb'

    - script: |
        echo "Installing Rapise..."
        npm install rapise.tgz
      displayName: 'Install Rapise'
      workingDirectory: $(Build.SourcesDirectory) # Ensure working directory is the root of the repo

    - script: |
        # This entire block is executed within the virtual display environment
        xvfb-run --auto-servernum --server-args="-screen 0 1280x1024x24" bash <<'EOF'
        
        echo "--- Launching Rapise inside the Xvfb virtual environment ---"
        
        # Your command runs here, with access to the virtual GUI
        npx rapiselauncher -c RepositoryConnection.xml -t 925 --details
        
        echo "--- Rapise execution complete ---"
        
        EOF
      displayName: 'Run Rapise Launcher with Xvfb'
      workingDirectory: $(Build.SourcesDirectory)
    ```
#### GitHub Actions

=== "headless-pipeline.yml"
    ```
    name: Run Rapise Tests

    # This makes the workflow manually triggerable from the Actions tab.
    # It's the direct equivalent of Azure DevOps' "trigger: none".
    on:
      workflow_dispatch:

    jobs:
      run-rapise:
        # This is the equivalent of "pool: vmImage: ubuntu-latest"
        runs-on: ubuntu-latest

        steps:
        # Step 1: Check out the repository code
        # This is done automatically in Azure DevOps, but it is a required explicit step in GitHub Actions.
        - name: Check out repository
          uses: actions/checkout@v4

        # Step 2: Install Node.js
        # This is the equivalent of the "NodeTool@0" task.
        - name: Install Node.js 22
          uses: actions/setup-node@v4
          with:
            node-version: '22.x'

        # Step 3: Install Rapise
        # The 'run' keyword is the equivalent of 'script'.
        - name: Install Rapise
          run: |
            echo "Installing Rapise..."
            npm install rapise.tgz

        # Step 4: Run the Rapise Launcher
        - name: Run Rapise Launcher
          run: |
            echo "Launching Rapise..."
            npx rapiselauncher -c RepositoryConnection.xml -t 925 --details --param "g_browserLibrary=Selenium - ChromeHeadless"
    ```
=== "xvfb-pipeline.yml"
    ```
    name: Run Rapise Tests xvfb

    # This makes the workflow manually triggerable from the Actions tab.
    # It's the direct equivalent of Azure DevOps' "trigger: none".
    on:
      workflow_dispatch:

    jobs:
      run-rapise:
        # This is the equivalent of "pool: vmImage: ubuntu-latest"
        runs-on: ubuntu-latest

        steps:
        # Step 1: Check out the repository code
        # This is done automatically in Azure DevOps, but it is a required explicit step in GitHub Actions.
        - name: Check out repository
          uses: actions/checkout@v4

        # Step 2: Install Node.js
        # This is the equivalent of the "NodeTool@0" task.
        - name: Install Node.js 22
          uses: actions/setup-node@v4
          with:
            node-version: '22.x'
            
        # Step 3: Install Xvfb
        - name: Install Xvfb
          run: sudo apt-get update && sudo apt-get install -y xvfb

        # Step 4: Install Rapise
        # The 'run' keyword is the equivalent of 'script'.
        - name: Install Rapise
          run: |
            echo "Installing Rapise..."
            npm install rapise.tgz

        # Step 5: Run the Rapise Launcher
        - name: Run Rapise Launcher with Xvfb
          run: |
            # This entire block is executed within the virtual display environment
            xvfb-run --auto-servernum --server-args="-screen 0 1280x1024x24" bash <<'EOF'
            
                echo "--- Launching Rapise inside the Xvfb virtual environment ---"
            
                # Your command runs here, with access to the virtual GUI
                npx rapiselauncher -c RepositoryConnection.xml -t 925 --details
            
                echo "--- Rapise execution complete ---"
            
            EOF
          working-directory: ${{ github.workspace }}
    ```   

#### Docker

=== "docker-compose.yml"
    ```
    services:
      rapise-tester:
        build: .
        volumes:
          # This single line maps your current project directory on the host ('.')
          # to the /app directory inside the container.
          - ./:/app
          # THIS IS THE FIX: This tells Docker to create an anonymous volume
          # at /app/node_modules, effectively preserving the one from the image
          # and preventing the host from overwriting it.
          - /app/node_modules

    # Add this entire "networks" section at the bottom
    networks:
      default:
        driver: bridge
        driver_opts:
          com.docker.network.driver.mtu: "1400" # Good starting point for most VPNs
    ```
=== "Dockerfile"
    ```
    # Use a modern, slim Debian base image
    FROM debian:bookworm-slim

    # Set an environment variable to prevent interactive prompts during installation
    ENV DEBIAN_FRONTEND=noninteractive

    # ==== 1. Install System Dependencies and Chrome (Using curl) ====
    RUN apt-get update && apt-get install -y \
        curl \
        ca-certificates \
        git \
        iputils-ping \
        iproute2 \
        openssl \
        --no-install-recommends && \
        # Download the official .deb package from Google using curl
        # -L: Follow redirects (important for download links)
        # -o: Specify output file
        curl -L -o /tmp/google-chrome-stable_current_amd64.deb \
        "https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb" && \
        # Use apt to install the local .deb file.
        # apt is smart and will automatically fetch all necessary dependencies.
        apt-get install -y /tmp/google-chrome-stable_current_amd64.deb && \
        # Clean up the downloaded file
        rm /tmp/google-chrome-stable_current_amd64.deb

    # ==== 2. Install Node.js 22 ====
    # The Node.js installation script already uses curl, so this is consistent.
    RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - && \
        apt-get install -y nodejs

    # ==== 3. Set up the application environment and install the Rapise package ====
    WORKDIR /app

    # Copy ONLY the rapise.tgz package first.
    COPY rapise.tgz ./

    # Run npm install based *only* on the file above.
    RUN npm install ./rapise.tgz

    # ==== 4. Copy the rest of your source code ====
    COPY . .

    # ==== 5. Clean up ====
    # Since we need curl for Node.js setup, we don't remove it until the end.
    RUN apt-get purge -y --auto-remove && \
        rm -rf /var/lib/apt/lists/*
    ```
=== "rapise.tgz"
    ```
    Should be located in the same directory as the Dockerfile.
    ```
=== "RepositoryConnection.xml"
    ```
    Should be located in the same directory as the Dockerfile.
    ```