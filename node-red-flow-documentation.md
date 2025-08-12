# Node-RED Flow Documentation

### Description

Briefly explain what this flow does, what problem it solves, or what functionality it provides. Include the main purpose and a high-level summary of its operation.

### Features

List the key features of the flow using bullet points. For example:

* Integrates with a specific API (e.g., weather data, smart home devices).

* Sends notifications (e.g., via email, Pushover).

* Processes data and performs calculations.

* Automates a specific task.

### Requirements

#### 2N Access Commander

* Specify the minimum required version (e.g., `3.4.0` or later).

#### 2N OS

* Specify the minimum required version (e.g., `2.48.0` or later).

#### Hardware

If the flow requires specific hardware, list it here. List either a specific device or a group of devices if it's relevant to multiple devices.

* **2N Access Unit** or **2N IP Intercom**

  * Mention any hardware specifications if relevant (e.g., `Touch Display module`, `Touch Keypad & RFID module`).

* **2N Answering Unit**

* **2N Indoor View**

* **2N IP Verso 2.0**

  * `Touch Display module`

#### Palettes (Nodes)

List all the non-standard nodes required for the flow to work. You should include the name of the package and a link to its npm or GitHub page for easy installation.

* `node-red-node-email` (e.g., for integrating with a specific service)

* `@flowfuse/node-red-dashboard` (if a dashboard is used)

* `node-red-contrib-another-node` (e.g., for a specific function)

### Installation and Setup

#### 1. Importing the Flow

1. Download the JSON code [flows.json](flows.json) file or copy its contents.

2. In your Node-RED editor (`Access Commander Automation`), go to the menu (top right) and select **Import**.

3. Choose **Clipboard** and paste the JSON code or **select a file to import**.

4. Click **Import**.

#### 2. Installing Required Nodes

If you haven't already installed the required palettes, you can do so via the Node-RED Palette Manager:

1. Go to the Node-RED menu (top right) and select **Manage palette**.

2. Switch to the **Install** tab.

3. Search for each required node (e.g., `@flowfuse/node-red-dashboard`) and click **install**.

#### 3. Configuration

* Provide clear, step-by-step instructions on how to configure the flow.

* Explain which nodes need to be edited and what parameters need to be set.

* **Example: MQTT Broker Settings**

  1. Locate the `MQTT In` and `MQTT Out` nodes.

  2. Double-click each node to open its properties.

  3. Configure the MQTT broker details (Server, Port, Client ID, Username, Password if required).

  4. Ensure the topics are correctly set for your application and click on `Done`.

* **Example: API Key Configuration**

  * For nodes requiring API keys (e.g., `HTTP Request` to an external service), explain where to obtain the key.

  * Instruct the user where to store the API key securely, preferably in a Node-RED `Context` variable or environment variable.

    * **Set Global Environment Variables** 

      1. Go to the Node-RED menu (top right) and select **Settings**.

      2. From the left menu select **Environment**.

      3. Add or edit (if prefilled) variable `API key`, select `credential` variable type and fill in your API key.
      
      4. Once filled in, you can **Close** the window.  

* **Example: Change variable in node**

  1. Locate the `function` (*customNameOfFunction*) node.

  2. Double-click the node to open its properties.

  3. Modify the `validity` variable:

      ```javascript

      // .... start of the code ... 


      // Set the validity period for the session cookie in milliseconds
      var validity = 600000; // 10 minutes


      // ... rest of the code ...

      ```

  4. Save the change by pressing `Done`.

* Include details on setting up any external services or dependencies.

* Use screenshots or animated GIFs if the configuration is complex.

### Usage

* Explain how to use the flow after it has been configured and deployed.

* Describe the expected inputs that trigger the flow (e.g., `Inject a timestamp`, `Send a message to the "start" topic with a payload of "true"`, `HTTP POST request to /my-endpoint`).

* Describe the expected outputs or behavior (e.g., `The flow will send a notification via email`, `It will update a dashboard chart`, `It will log data to a database`).

* Provide examples of input messages if relevant.

### Flow Diagram

![Flow Diagram](diagram.png "Flow Diagram")

### Flow Details and Explanation

Provide a detailed explanation of each major section or logical block of the flow. Use headings to structure this section clearly.

#### 1. Input Trigger (e.g., "Schedule Checker")

* **Nodes Used:** List the key nodes (e.g., `Inject`, `Function`, `MQTT In`).

* **Logic:** Explain the logic within this section. For example, "This `Inject` node is configured to trigger every 5 minutes, sending a message to the `Function` node. The `Function` node then checks the current time and day to determine if the automation should proceed."

#### 2. Data Processing (e.g., "API Call and Data Transformation")

* **Nodes Used:** List relevant nodes (e.g., `HTTP Request`, `JSON`, `Change`).

* **Logic:** Explain how data is fetched, parsed, and transformed. "The `HTTP Request` node calls the weather API. The response is then parsed by the `JSON` node. Finally, the `Change` node extracts the temperature and humidity values from `msg.payload` and renames them to `msg.temperature` and `msg.humidity`."

#### 3. Output Action (e.g., "Notification Sender")

* **Nodes Used:** List relevant nodes (e.g., `Email Sender`, `Debug`).

* **Logic:** Explain how the processed data is used. "The `Email Sender` node constructs a message using `msg.temperature` and `msg.humidity` and sends it to the configured chat ID. A `Debug` node is also connected to show the final message in the debug sidebar."

### Troubleshooting

* List any known issues and their solutions.

* **Error: "Missing credentials"**: Ensure all API keys and sensitive information are correctly configured in the respective nodes or global context.

* **Flow not triggering**: Check the `Inject` node settings or any preceding nodes for correct configuration.

### Limitations and Known issues:

  * List any possible limitations you have discovered.

### Author and Versioning

* **Author:** \[Your Name or GitHub Handle\]

* **Created On:** `[YYYY-MM-DD]`

* **Last Verified Working On:** `[YYYY-MM-DD]` (Date when it was last confirmed to be fully functional in a production/test environment)

* **Verified with:**

  * **2N Access Commander:** `[Specific Version, e.g., 3.4.0]`

  * **2N OS:** `[Specific Version, e.g., 2.48.1]`

### License

This Node-RED flow is released under the [MIT License](https://opensource.org/licenses/MIT).