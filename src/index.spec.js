'use strict';

var _ = require("lodash");

var servers = [
    {
        name: "server1",
        ip: "10.0.0.1",
        cpu: 0.1,
        ram: 0.2
    },
    {
        name: "server2",
        ip: "10.0.0.2",
        cpu: 0.6,
        ram: 0.1
    },
    {
        name: "server3",
        ip: "10.0.0.3",
        cpu: 0.9,
        ram: 0.6
    }
    ];

function getIps (servers) {
    return _.map(servers, "ip");
}

function getHighCpus (servers, quantity) {
    return _(servers)
        .filter(isHighCpu)
        .orderBy("cpu", "desc")
        .take(quantity)
        .map("name")
        .value();
}

function isHighCpu (server) {
    var cpuThreshold = 0.5;
    return server.cpu >= cpuThreshold
}

function getMeanRam (servers) {
    var sum = _(servers)
        .map("ram")
        .reduce(_.add, 0);
    return sum / servers.length;
}

describe("", function () {
    it("get the list of ips", function () {
        expect(getIps(servers)).toEqual(["10.0.0.1", "10.0.0.2", "10.0.0.3"]);
    });

    it("gets the n highest cpu servers, highest usage first", function () {
        expect(getHighCpus(servers, 1)).toEqual(["server3"]);
    });

    it("computes the mean ram usage", function () {
        expect(getMeanRam(servers)).toEqual(0.3);
    });
});
