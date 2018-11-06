var user ={
    first_name : "Paul",
    name : "Decoux",
    country : "France",
    age : 28,
    means_of_payment :  "master Card",

    get_first_name: function(){
        alert(this.first_name);
    },

    get_name: function () {
        alert(this.name);
    },
    get_date_born: function () {
        var date = new Date();
        alert(date.getFullYear() - this.age);
    }

    
};



var secure ={
    country: ["FRANCE", "ANGLETERRE", "ESPAGNE", "BELGIQUE"],
    means_of_payment: ["MASTER CARD", "VISA", "PAYPAL"],
    age_mini: 18,

    secure_age_mini: function(){
        if (user.age > secure.age_mini){
            alert("Vous avez l'age requis");
        }else{
            alert("Vous n'etes pas majeur");
        }
    },

    secure_country: function(){
        if (secure.country.includes(user.country.toUpperCase())) {
            alert("Vous habitez dans un pays autorisé: Accé autorisé");
        }else{
            alert("Vous habitez dans un pays non autorisé, désolé !!")
        }
    },

    secure_means_of_payment: function(){
        if (secure.means_of_payment.includes(user.means_of_payment.toUpperCase())) {
            alert("Votre moyen de payment est autorisé");
        } else {
            alert("Votre moyen de payment n'est pas autorisé")
        }
    },

    get_secure: function(){
        //user.get_first_name();
        //user.get_date_born();
        secure.secure_age_mini();
        secure.secure_country();
        secure.secure_means_of_payment();
    }

}

secure.get_secure();



