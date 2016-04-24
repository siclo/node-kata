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
    var cpuThreshold = 0.5;
    var highCpus = _.filter(servers, function (server) {
        return server.cpu >= cpuThreshold;
    });
    var sortedHighCpus = _.orderBy(highCpus, "cpu", "desc");
    var nHighestCpus = _.take(sortedHighCpus, quantity);
    return _.map(nHighestCpus, "name");
}

describe("", function () {
    it("get the list of ips", function () {
        expect(getIps(servers)).toEqual(["10.0.0.1", "10.0.0.2", "10.0.0.3"]);
    });

    it("gets the n highest cpu servers, highest usage first", function () {
        expect(getHighCpus(servers, 1)).toEqual(["server3"]);
    });
});
