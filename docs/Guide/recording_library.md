# Object Libraries

## Purpose

**Object libraries** define what objects and interactions Rapise understands during [Recording](recording.md) and [Learning](object_learning.md).  Most Object Libraries are specific to an application or a set of applications.

## Usage

Rapise comes with many different object libraries. See the list of libraries and supported control types below.

> **Note:** Selecting **Auto** as the application recording library will cause Rapise to select the one that it deems is most appropriate.

> **Note:** You can [add your own](custom_libraries.md) Recording library - one that understands the objects in your application.

## Libraries

- Auto
- Desktop
    - [Generic](../Libraries/ses_lib_generic.md)
    - [UIAutomation](../Libraries/ses_lib_uiautomation.md)
    - [Managed](../Libraries/ses_lib_managed.md)
    - [DevExpress](../Libraries/ses_lib_devexpress.md)
    - [Infragistics](../Libraries/ses_lib_infragistics.md)
    - [Syncfusion](../Libraries/ses_lib_syncfusion.md)
    - [Telerik](../Libraries/ses_lib_telerik.md)
    - [Advanced Accessibility](../Libraries/ses_lib_advaac.md)
    - [ActiveX](../Libraries/ses_lib_activex.md)
    - [ActiveXC1](../Libraries/ses_lib_activex.md)
    - [ActiveXSft](../Libraries/ses_lib_activex.md)
    - [FarPoint](../Libraries/ses_lib_farpoint.md)
    - [VSFlexGrid](../Libraries/ses_lib_vsflexgrid.md)
    - [Java](../Libraries/ses_lib_java.md)
    - [SWT](../Libraries/ses_lib_swt.md)
    - [Qt](../Libraries/ses_lib_qt.md)
- Web
    - [Web](../Libraries/ses_lib_web.md)
    - [Selenium](../Libraries/ses_lib_selenium.md)
    - [jQuery](../Libraries/ses_lib_jquery.md)
    - [AgGrid](../Libraries/ses_lib_aggrid.md)
    - [GWT](../Libraries/ses_lib_gwt.md)
    - [GWTExt](../Libraries/ses_lib_gwtext.md)
    - [DomSmartGwt](../Libraries/ses_lib_smartgwt.md)
    - [YUI](../Libraries/ses_lib_yui.md)
- API
    - [Web Services](../Libraries/ses_lib_webservices.md)
- Mobile
    - [Mobile](../Libraries/ses_lib_mobile.md)
- Enterprise Applications
    - [DynamicsAX](../Libraries/ses_lib_dynamicsax.md)
    - [DynamicsNAV](../Libraries/ses_lib_dynamicsnav.md)
    - [NavPOSControls](../Libraries/ses_lib_navposcontrols.md)
    - [DomDynamicsNAV](../Libraries/ses_lib_domdynamicsnav.md)
    - [DomDynamicsAX](../Libraries/ses_lib_dynamics365.md)
    - [DomDynamicsCrm](../Libraries/ses_lib_dynamicscrm.md)
    - [DomSalesforce](../Libraries/ses_lib_salesforce.md)
    - [DomSap](../Libraries/ses_lib_domsap.md)

## See Also

- [Recording](recording.md)
- To write an Object library specific to your application, see [Custom Libraries](custom_libraries.md).
- [Cross Browser Testing](cross_browser_testing.md)
- If you interact with an object that is not defined in your chosen recording library, it will be treated as a [Simulated Object](simulated_objects.md).
