# Node-RED Flow Documentation

### Description

This flow automatically creates and assigns phone numbers from the My2N cloud to newly created users in the 2N Access Commander. It solves the problem of manual number provisioning by using the My2N cloud API to create a mobile video device and then assigning its number to the newly created users, thereby automating the setup of My2N cloud calling.

### Features

* Automated assignment of My2N phone numbers, eliminating manual configuration.

* Uses the My2N cloud API to create mobile video devices and assigns their phone numbers to the created users.

* Handles automatic deletion on the My2N when a user is deleted from the 2N Access Commander.

### Requirements

#### 2N Access Commander

* `3.4.0`

#### My2N account

* Cloud calling is a paid feature and requires a license

### Installation and Setup

#### 1. Importing the Flow

1. Download the JSON code ***REMOVED***flows.json***REMOVED***(flows.json) file.

2. In your Node-RED editor (`Access Commander Automation`), go to the menu (top right) and select **Import**.

3. Choose **Clipboard** and paste the JSON code or **select a file to import**.

4. Click **Import**.

#### 2. Configuration

* Provide clear, step-by-step instructions on how to configure the flow.

* Explain which nodes need to be edited and what parameters need to be set.

  * **Example: MQTT Broker Settings**

    * Locate the `MQTT In` and `MQTT Out` nodes.

    * Double-click each node to open its properties.

    * Configure the MQTT broker details (Server, Port, Client ID, Username, Password if required).

    * Ensure the topics are correctly set for your application.

  * **Example: API Key Configuration**

    * For nodes requiring API keys (e.g., `HTTP Request` to an external service), explain where to obtain the key.

    * Instruct the user to store the API key securely, preferably in a Node-RED `Context` variable (e.g., `global.get('apiKey')`) or environment variable, rather than directly in the node.

    * **How to set a global context variable:**

      1. Open your Node-RED `settings.js` file (usually located in `~/.node-red`).

      2. Find the `contextStorage` section and enable `memory` or `file` storage if not already.

      3. Add or modify the `functionGlobalContext` section to include your variable:

         ```javascript
         functionGlobalContext: {
             // Example: API Key
             apiKey: "YOUR_API_KEY_HERE",
             // Example: Another secret
             anotherSecret: process.env.ANOTHER_SECRET_ENV_VAR
     ***REMOVED***
         ```

      4. Restart Node-RED.

      5. In your function nodes, you can then access it using `global.get('apiKey')`.

* Include details on setting up any external services or dependencies.

* Use screenshots or animated GIFs if the configuration is complex.

### Usage

* Explain how to use the flow after it has been configured and deployed.

* Describe the expected inputs that trigger the flow (e.g., `Inject a timestamp`, `Send a message to the "start" topic with a payload of "true"`, `HTTP POST request to /my-endpoint`).

* Describe the expected outputs or behavior (e.g., `The flow will send a notification to Telegram`, `It will update a dashboard chart`, `It will log data to a database`).

* Provide examples of input messages if relevant.

### Flow Diagram

!***REMOVED***Flow Diagram***REMOVED***(diagram.png "Flow Diagram")

### Flow Details and Explanation

Provide a detailed explanation of each major section or logical block of the flow. Use headings to structure this section clearly.

#### 1. Input Trigger (e.g., "Schedule Checker")

* **Purpose:** Briefly describe what this section does.

* **Nodes Used:** List the key nodes (e.g., `Inject`, `Function`, `MQTT In`).

* **Logic:** Explain the logic within this section. For example, "This `Inject` node is configured to trigger every 5 minutes, sending a message to the `Function` node. The `Function` node then checks the current time and day to determine if the automation should proceed."

#### 2. Data Processing (e.g., "API Call and Data Transformation")

* **Purpose:** Describe the processing steps.

* **Nodes Used:** List relevant nodes (e.g., `HTTP Request`, `JSON`, `Change`).

* **Logic:** Explain how data is fetched, parsed, and transformed. "The `HTTP Request` node calls the weather API. The response is then parsed by the `JSON` node. Finally, the `Change` node extracts the temperature and humidity values from `msg.payload` and renames them to `msg.temperature` and `msg.humidity`."

#### 3. Output Action (e.g., "Notification Sender")

* **Purpose:** Describe the final action.

* **Nodes Used:** List relevant nodes (e.g., `Telegram Sender`, `Debug`).

* **Logic:** Explain how the processed data is used. "The `Telegram Sender` node constructs a message using `msg.temperature` and `msg.humidity` and sends it to the configured chat ID. A `Debug` node is also connected to show the final message in the debug sidebar."

### Troubleshooting

* **Common Issues:** List any known issues and their solutions.

  * `Error: "Missing credentials"`: Ensure all API keys and sensitive information are correctly configured in the respective nodes or global context.

  * `Flow not triggering`: Check the `Inject` node settings or any preceding nodes for correct configuration.

### Limitations and Known issues:

  * List any possible limitations you have discovered.

### Author and Versioning

* **Author:** ***REMOVED***Kristian Velen***REMOVED***(https://github.com/kv-0000)

* **Created On:** `***REMOVED***2025-08-04***REMOVED***`

* **Last Verified Working On:** `***REMOVED***2025-08-04***REMOVED***`

* **Verified with:**

  * **2N Access Commander:** `***REMOVED***3.4.0***REMOVED***`


### License

This Node-RED flow is released under the ***REMOVED***MIT License***REMOVED***(https://opensource.org/licenses/MIT).