# NeoLoad Integration

!!! important
    NeoLoad integration has been removed in Rapise 7.0.

This section describes the integration between Inflectra’s Rapise functional testing tool and Neotys’ NeoLoad performance testing tool.

The purpose of this integration is to satisfy the following two use cases:

1. The tester has written a test script in Rapise that tests the user interface of the application (by clicking on buttons and performing
other UI tasks) but now wants to load test the server behind the user interface to make sure it can withstand the load of 10,000+ similar
users making requests.
    - The existing Rapise test is not suitable because it would mean launching 10,000+ instances of the application or web browser on a
single client machine, or having 10,000 instances of the application run on different machines at the same time.
    - The solution is to use a **protocol-based load testing tool** such as NeoLoad that sends the HTTP/HTTPS requests directly to the server.
    - However it is laborious and time consuming to manually record the entire script in NeoLoad from scratch.
    - The solution is to [automatically convert the Rapise script to NeoLoad](convert_functional_to_load_tes.md) by playing the Rapise script at the same time as NeoLoad records the generated HTTP/HTTPS traffic.
1. The tester wants to measure the [speed of the user interface](client_performance_monitoring.md) that a user would experience whilst performing a protocol-level level load test.
    - How long does each transaction take whilst 1000 VUs are hitting the same system.
    - The user interface could be web, mobile or thick client (e.g. ERP system).
