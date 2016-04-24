'use strict';

var servers = [
    {
        name: "server1",
        ip: "10.0.0.1",
        cpu: 0.1,
        ram: 0.3
    },
    {
        name: "server2",
        ip: "10.0.0.2",
        cpu: 0.9,
        ram: 0.7
    },
    {
        name: "server3",
        ip: "10.0.0.3",
        cpu: 0.0,
        ram: 0.0
    }
    ];

function getIps (servers) {
    var i;
    var result = [];
    for (i = 0; i < servers.length; i++) {
        result.push(servers[i].ip);
    }
    return result;
}

describe("", function () {
    it("get the list of ips", function () {
        expect(getIps(servers)).toEqual(["10.0.0.1", "10.0.0.2", "10.0.0.3"]);
    });
});
