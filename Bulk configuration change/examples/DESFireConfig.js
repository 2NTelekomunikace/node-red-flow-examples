let config = msg.payload.DeviceDatabase;

msg.payload ={
    DeviceDatabase: {
        $: config.$,
            CardReader: {
            KeyStore: {
                Keys: {
                    Desfire: {
                        AID: "000000",
                        KeyNo: "00",
                        AuthKey: "00000000000000000000000000000000",
                        KeyType: "00",
                        AuthMode: "00",
                        FileNo: "00",
                        Offset: "000000",
                        Bits: "00000030",
                        DecodeASCII: "01"
                    }
                }
            }
        }
    }
};

return msg;