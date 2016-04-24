'use strict';

var _ = require("lodash");

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
        cpu: 0.6,
        ram: 0.1
    }
    ];

function getIps (servers) {
    return _.map(servers, "ip");
}

function getHighCpus (servers) {
    var cpuThreshold = 0.5;
    var highCpus = _.filter(servers, function (server) {
        return server.cpu >= cpuThreshold;
    });
    return _.map(highCpus, "name");
}

describe("", function () {
    it("get the list of ips", function () {
        expect(getIps(servers)).toEqual(["10.0.0.1", "10.0.0.2", "10.0.0.3"]);
    });

    it("gets the high cpu servers", function () {
        expect(getHighCpus(servers)).toEqual(["server2", "server3"]);
    });
});
