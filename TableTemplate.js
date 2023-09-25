'use strict';
//Table Template javascript file
class TableTemplate {
    constructor(template) {
        this.template = template;
    }
    
    static fillIn(id, dictionary, columnName) {
        // TODO: See if we can move this out of this function (okay if not)
        function fillInTemplate(template) {
            var updated = "";
            for (var i = 0; i<template.length; i++) {
                var c = template[i];
                if (c === '{') {
                    var c2 = template[i+1];
                    if(c2!== '{') {
                        updated += c2;
                        ++i;
                        continue;
                    }
                    i++;
                    
                    var keyword = "";
                    for (var j = i+1; j<template.length; j++, i++) {
                        var c3 = template[j];
                        var c4 = template[j+1];
                        if (c3 === '}' && c4 === '}') {
                            i += 2;
                            break;
                        } else {
                            keyword += c3;
                        }
                    }
                    
                    if (keyword in dictionary) {
                        updated += dictionary[keyword];
                    } else {
                        updated += "";
                    }
                } else {
                    updated += c;
                }
            }
            return updated;
        }
        var table = document.getElementById(id);
        
        // Show the table
        table.style = "visibility:visible;";
        
        // Decide which column to process
        // And process the header
        var to_process = 2;     // 2 = all
        if (columnName === "Length") {
            to_process = 1;
        } else if (columnName === "Part Number") {
            to_process = 0;
        }
        table.rows[0].cells[0].innerHTML = "Part Number";
        table.rows[0].cells[1].innerHTML = "Length";
        
        for (var i = 1; i<table.rows.length; i++) {
            var row = table.rows[i].cells;
            if (to_process === 0) {
                row[0].innerHTML = fillInTemplate(row[0].innerHTML, dictionary);
            } else if (to_process === 1) {
                //row[1].innerHTML = "U1";
                row[1].innerHTML = fillInTemplate(row[1].innerHTML, dictionary);
            } else {

                row[0].innerHTML = fillInTemplate(row[0].innerHTML, dictionary);
                row[1].innerHTML = fillInTemplate(row[1].innerHTML, dictionary);
            }
        }

    }
}

