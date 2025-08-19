let config = msg.payload.DeviceDatabase;

msg.payload = {
    DeviceDatabase: {
        $: config.$,
        Switches: [
            {
                Switch: {
                    $: {At: "0"},
                    HoldSwitchTimeProfile: `P=0`
                } 
            }
        ]
    }
};

return msg;
