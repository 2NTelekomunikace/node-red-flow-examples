let config = msg.payload.DeviceDatabase;

msg.payload = {
    DeviceDatabase: {
        $: config.$,
        HttpApi: [
            {
                Account: {
                    $: {At: "1"},
                    Enabled: 1,
                    UserName: "httpAdmin",
                    Password: "superSecretPassword",
                    Privilege: {
                        SystemMonitor: 1,
                        SystemControl: 1
                    }
                }
            }
        ]
    }
};

return msg;