# Image Capture

![image\_editor](./img/image_capture1.png)

## Purpose

The **Drawing Tools** image editor lets you capture a section of the current screen or application under test, add annotations to help document the image, and then attach the final result to the [current test case](manual_test_editor.md), test step, or [manual test result](manual_playback.md).

## How to Open

You can open the Drawing Tools dialog box by clicking the **Image icon** in the various rich text editors in Rapise. When you do that, Rapise will minimize itself and display the following screen:

![image\_editor\_select\_screen\_region](./img/image_capture2.png)

You now need to draw a rectangle on your screen to indicate which part of the screen you want to capture. Once defined, the image editor will open with the selected screen area. If you press the ESC key, the editor will open without an initial image.

## Image Editor Toolbar

The image editor provides the following tools:

![image\_editor\_toolbar](./img/image_capture3.png)

*   **Image Capture** - Discards the current image and captures a new screenshot.
*   **Paste From Clipboard** - Pastes an image from the Windows clipboard.
*   **Open** - Opens an existing image saved on your local computer.
*   **Save** - Saves the current image to your local computer.
*   **Pointer** - Selects an annotation for editing (arrow, rectangle, ellipse, line, text, etc.).
*   **Arrow** - Draws an arrow in the current color on top of the current image.
*   **Rectangle** - Draws a square or rectangle in the current color on top of the current image.
*   **Ellipse** - Draws a circle or ellipse in the current color on top of the current image.
*   **Line** - Draws a straight line in the current color on top of the current image.
*   **Pencil** - Draws freehand in the current color on top of the current image.
*   **Text** - Adds text in the current color and current font on top of the current image. A rectangle must be drawn to define the text box size before entering the text.
*   **Undo** - Undoes the last operation.
*   **Redo** - Redoes the last operation.
*   **Font Name** - Changes the font family and size:

    ![image\_editor\_change\_font](./img/image_capture4.png)

*   **Color** - Changes the current color (used for various annotations):
    ![image\_editor\_change\_color](./img/image_capture5.png)

*   **Line Width** - Changes the current line width (used for various annotations).

## Image Editor Footer

The footer of the Drawing Tools provides the following options:
    
![image\_editor\_footer](./img/image_capture6.png)

*   **Scale** - Changes the zoom level of the current window, allowing easier viewing of small or large images.
*   **Accept** - Accepts the current image and inserts it into the **test case**, **test step**, or **test run** that was being edited.