# Configuration examples

Here are a few configuration examples to help you with the setup.

## Usage

1. Copy the **entire contents** of the selected `.js` file.

2. Locate the `function` (*edit config*) node.

3. Double-click the node to open its properties.

4. **Replace all existing content** in the node with the copied data.

## Examples

1. [HoldSwitchTimeProfile.js](HoldSwitchTimeProfile.js) will apply the **Time Profile** stored in the first position as the **Hold Switch Time Profile**.

2. [HttpApiAccount.js](HttpApiAccount.js) will create an HTTP API account in the second position with a predefined username, password and allow privileges to the system.

3. [SipAccountBackupAddress.js](SipAccountBackupAddress.js) will add a predefined backup proxy and backup registrar address to SIP 1 account.

4. [DESFireConfig.js](DESFireConfig.js) uploads the DESFire configuration so that the 2N device can read encrypted DESFire cards.

    | Key | Value type/format | Description |
    | - | - | - |
    | **AID** | 3 bytes (6 hexadecimal chars) | **Application Identifier (AID):** Unique app identifier on a MIFARE DESFire card. Every card can include multiple applications and each app has files and keys of its own. |
    | **AuthKey** | 16 bytes (32 hexadecimal chars) | **Authentication Key:** Cryptographic key (AES 128) used for secure authentication and encrypted communication setup on the card. |
    | **KeyType** | `01` (including initial zeros) | **Key Type:** Define the encryption algorithm used. At present, AES 128 is only supported, for which the value `01` is entered. |
    | **AuthMode** | `00`: No authentication <br> `01`: AES authentication  | **Authentication Mode:** Enable/disable authentication using AuthKey. Set `01` for secure access to the files. |
    | **FileNo** | `00` to `0F` | **File Number:** Identifier of a specific data file within a selected application (`AID`). There can be up to 32 files in one application. |
    | **Offset** | 3 bytes (6 hexadecimal chars) | **Offset:** Set the initial position (in bytes) from which the file data should be read. The value `000000` indicates the file beginning. |
    | **Bits** | 4 bytes (8 hexadecimal chars) | **Bits:** Define how many bits are to be read from the file (starting from the `Offset` position). Set the value in the hexadecimal format. |
    | **DecodeASCII** | `01`: Enabled <br> `00`: Disabled | **Decoding to ASCII:** Define whether or not the binary data read from the card shall be automatically interpreted and decoded as text characters in the ASCII format. |
