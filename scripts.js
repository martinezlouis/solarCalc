"use strict";

function addMonths(elem){
    var annaulUsekw = 0, dailyUse = 0 , i =0 , x= 0;
    var months = document.getElementById(elem).getElementsByTagName("input");

    for (i=0; i<months.length; i++){
        x= Number(months[i].value);
        annaulUsekw += x;
    }

    dailyUse = annaulUsekw/365;
    return dailyUse


}


function sunHours(){
    var hrs;
    var theZone = document.forms.solarForm.zone.selectedIndex;
    
    theZone += 1;
    
    switch(theZone){
        case 1:
            hrs = 6;
            break;
        case 2:
            hrs = 5.5;
            break;
        case 3:
            hrs = 5;
            break;
        case 4:
            hrs =4.5;
            break;
        case 5:
            hrs = 4.2;
            break;
        case 6:
            hrs = 3.5;
            break;
        default:
            hrs=0;
    }
    return hrs
}


function calculateSolar() {
    var  dailyUseKw = addMonths("mpc");
    var sunHoursPerDay = sunHours();
    var minKwNeeds = dailyUseKw/sunHoursPerDay;

    var realKwNeeds = minKwNeeds *1.25;
    var realWattNeeds = realKwNeeds *1000;
    var panelInfo = calculatePanel()
    var panelOutput = panelInfo[0];
    var panelName = panelInfo[1];
    console.log(panelOutput)
    console.log(panelName)

    var panelsNeeded = Math.ceil(realWattNeeds / panelOutput);


    console.log(dailyUseKw)
    console.log(sunHoursPerDay)
    console.log(minKwNeeds)

}

function calculatePanel(){
    var userChoice = document.forms.solarForm.panel.selectedIndex;
    var panelOptions = document.forms.solarForm.panel.options;
    var power = panelOptions[userChoice].value;
    var named = panelOptions[userChoice].text;
    
    var x = [power, named];
    return x
    
}


var feedback = "";
feedback += "<p>Based on your average daily use of " + Math.round(dailyUseKw) + " KWH, you will need to purchase "+ panelsNeeded+ " "+ "solar panel";
feedback += "<h2>Additional Details</h2>";
feedback += "<p>Your average daily electricity consumption: 999 kWh per day.</p>";
feedback += "<p>Average sunshine hours per day: 99 hours.</p>";
feedback += "<p>Realistic watts needed per hour: 125 watts/hour.</p>";
feedback += "<p>The NAME panel you selected generates about XXX watts per hour.</p>";