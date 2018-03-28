/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
function readdata() {


	d3.csv("data/picture.csv", function(data) {
        /*data.forEach(function(d){
			d.Jahr = +d.Jahr;
			d.Total = +d.Total;
		});*/
		dataset = data;
		//console.log(dataset);
    maketable();
    });
}

function maketable() {
  var tabelle = d3.select("#tabelle").append("table").attr("style","display:yes");
  var Kopfzeile = tabelle.append("tr");
  var child = Kopfzeile.append("th").text("Mitglied");
  var child2 = Kopfzeile.append("th").text("Bild");

  for (i in dataset) {
    //console.log(dataset[i]);

    var Zeile = tabelle.append("tr");
    Zeile.append("td").text(dataset[i]["member"]);
    Zeile.append("td").append("img")
      .attr("src", (dataset[i]["picture"]))
      .attr("instrument", (dataset[i]["instrument"]))
      .attr("since", (dataset[i]["since"]))
      .attr("name", (dataset[i]["member"]))
      .attr("secondname", (dataset[i]["secondname"]))
      .on("click", function(){seemore(this)});

  }
}

function seemore(thisel) {

  var tab = d3.select("table").attr("style", "display:none");
  //console.log(thisel);
  var name = thisel.getAttribute("name");
  var secondname = thisel.getAttribute("secondname");
  var instrument = thisel.getAttribute("instrument");
  var since = thisel.getAttribute("since");
  var src = thisel.getAttribute("src");

  var newdiv = d3.select("#tabelle").append("div").attr("id","temporär");
  newdiv.append("h1").text(instrument);
  newdiv.append("br");
  newdiv.append("img").attr("src",src).on("click",function(){closediv()}).attr("id","temppicture");
  newdiv.append("br");
  newdiv.append("p").text(name);
  newdiv.append("br");
  newdiv.append("p").text(secondname);
  newdiv.append("br");
  newdiv.append("p").text(since);
}

function closediv() {
    var tab = d3.select("table").attr("style", "display:yes");
    var close = d3.select("#temporär").remove();
}
