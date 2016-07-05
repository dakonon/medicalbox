angular.module('starter.services', [])

.service('constants', constantsService);

    function constantsService() {
        var self = this;
        var baseUrl='http://atboneapi.azurewebsites.net/api/v1/'
        self.providers = {};
      
        /* URL to Providers */

        self.providers.getItems = function (p, rpp, f) {
            var url = baseUrl + 'providers';
            if (p) {
                url += "?p={0}".replace("{0}", p)
            }
            if (rpp) {
                url += "&rpp={1}".replace("{1}", rpp)
            }
            if (f) {
                url += "&f=companyname:lk:{2}".replace("{2}", f)
            }
            return url;
        }
        self.providers.getItem = function (id) {
            var url = baseUrl + 'providers/';
                if (id) {
                    
                    url +=id
                    
            
                }
            return url;       
        }
        self.providers.addItem = function () {
             var url = baseUrl + 'providers';
             return url;
        }
        self.providers.updateItem = function (id) {
            var url = baseUrl + 'providers/';
             if (id) {
                    url +=id
                }
            return url;
        
        }
        self.providers.disableItem = function(){ }
};
