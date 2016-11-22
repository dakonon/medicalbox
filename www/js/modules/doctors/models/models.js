/**
  *Doctors Servicios  para el modelo de doctor 
  *@author nombre autor (nickname at Dakonon)
  *@email nombre@dominio.com
  *@copyright <a href='http://www.gnu.org/licenses/gpl-2.0.html'>GNU Public License versión 2 (GPLv2)</a>
  *@date dd/mm/aaaa
  *@version 1.0.0
*/
function Doctors() {
        this.phone_number = null;
        this.name = null;
        this.email = null;
        this.first_name = null;
        this.last_name = null;
    }

    Doctors.prototype.getAll = function() {
        // REST
        return "Result";
    };

    Doctors.prototype.findOne = function() {
        // REST
        // this.phone_number = null;
        // this.name = null;
        // this.email = null;
        // this.first_name = null;
        // this.last_name = null;
    };

    Doctors.prototype.findBy = function() {
        // REST
        // this.phone_number = obj;
        // this.name = null;
        // this.email = null;
        // this.first_name = null;
        // this.last_name = null;
    };

    Doctors.prototype.getSort = function(obj) {
        // REST
        return "return ordered objects";
    };

module.exports = [Doctors];