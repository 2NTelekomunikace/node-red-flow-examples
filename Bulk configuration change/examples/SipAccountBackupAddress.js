let config = msg.payload.DeviceDatabase;

msg.payload = {
    DeviceDatabase: {
        $: config.$,
        Phone: [
            {
                Sip: {
                    $: {At: "0"},
                    Proxy: {
                        FirstBackupAddress: "192.168.1.2" 
                    },
                    Registrar: {
                        FirstBackupAddress: "192.168.1.2"
                    }
                }
            }
        ]
    }
};

return msg;