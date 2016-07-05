angular.module('starter.services', [])

.service('constants', constantsService);

    function constantsService() {
        var self = this;
        var baseUrl='http://atboneapi.azurewebsites.net/api/v1/'
        self.providers = {};
        self.customers = {};
        self.projects = {};
        self.entities = {};
        self.products = {};
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
    
         /* URL to Customers */

        self.customers.getItems = function (p, rpp, f) {
            var url = baseUrl + 'customers?';
            if (p) {
                url = url + "p={0}&".replace("{0}", p)
            }
            if (rpp) {

                url = url + "rpp={1}&".replace("{1}", rpp)
            }
            if (f) {
                url = url + "f=companyname:lk:{2}".replace("{2}", f)
            }
            return url;
        }


         self.customers.getItem = function (id) {
            var url = baseUrl + 'customers/';
                if (id) {
                    
                    url +=id
                    
            
                }
            return url;       
        }

        self.customers.addItem = function () {
             var url = baseUrl + 'customers';
             return url;
        }
        self.customers.updateItem = function (id) {
            var url = baseUrl + 'customers/';
             if (id) {
                    url +=id
                }
            return url;
        
        }
        self.customers.disableItem = function(){ }

        /* URL to Projects */


        self.projects.getItems = function (p, rpp, f) {
            var url = baseUrl + 'projects';
            if (p) {
                url += "?p={0}".replace("{0}", p)
            }
            if (rpp) {
                url += "&rpp={1}".replace("{1}", rpp)
            }
            if (f) {
                url += "&f=personid:eq:{2}".replace("{2}", f)
            }
            return url;
        }


        self.projects.getItem = function (id) {
            var url = baseUrl + 'projects/';
            if (id) {

                url += id


            }
            return url;
        }

        self.projects.addItem = function () {
            var url = baseUrl + 'projects';
            return url;
        }
        self.projects.updateItem = function (id) {
            var url = baseUrl + 'projects/';
            if (id) {
                url += id
            }
            return url;

        }
        self.projects.disableItem = function () { }

        /* URL to Entities */

        self.entities.getItems = function () {
            var url = baseUrl + 'entities?f=entitytypeid:eq:4';
            
            return url;
        }

        self.entities.getStates = function (id) {
            var url = baseUrl + 'entities?f=entitytypeid:eq:5';
            if (id) {
                url += "|parentId:eq:{0}".replace("{0}", id)
            }
          
            return url;
        }

        self.entities.getCities = function (id) {
            var url = baseUrl + 'entities?f=entitytypeid:eq:6';
            if (id) {
                url += "|parentId:eq:{0}".replace("{0}", id)
            }

            return url;
        }

        self.entities.getProjects = function (id) {
            var url = baseUrl + 'entities?f=entitytypeid:eq:1';

            if (id) {
                url += "|parentId:eq:{0}".replace("{0}", id)
            }

            return url;
        }

        /* URL to Products */

        self.products.addItem = function () {
            var url = baseUrl + 'products';
            return url;
        }

    }
})()