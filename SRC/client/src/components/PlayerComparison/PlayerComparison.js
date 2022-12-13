import React from "react";
import { CloseButton } from "react-bootstrap";
import "./PlayerComparison.css";
import  Navigation  from "../Navigation/Navigation";

export default function PlayerComparison() {

    function clearSearchList(){
        var searchList = document.getElementById('searchList');
        while(searchList.firstChild){
            searchList.removeChild(searchList.firstChild);
        }
    }

    function clearComparisonList(){
        var comparisonList = document.getElementById('comparisonList');
        while(comparisonList.firstChild){
            comparisonList.removeChild(comparisonList.firstChild);
        }
    }

    function search(){
        var input = document.getElementById('searchBar').value;

        fetch('/playerAndTeam/' + input).then((res) =>
        res.json().then((data) => {

            var searchList = document.getElementById('searchList');

            while(searchList.firstChild){
                searchList.removeChild(searchList.firstChild);
            }

            for(let i=0; i<data.length; i++){

                searchList.appendChild(document.createTextNode(data[i].pf_name + ' ' + data[i].pl_name + ' (' + data[i].team_name + ') ' + '\xa0\xa0\xa0'));

                var contBtn = document.createElement('button');
                contBtn.style.height = '35px';
                contBtn.style.width = '230px';
                contBtn.innerHTML = 'View Player Contribution';
                contBtn.style.fontFamily = 'Tahoma';
                contBtn.style.fontSize = '18px';
                
                searchList.appendChild(contBtn);

                contBtn.addEventListener('click', () => {
                    var contList = document.getElementById('comparisonList');

                    clearComparisonList();
                    
                    contList.appendChild(document.createTextNode(data[i].pf_name + ' ' + data[i].pl_name + ' (' + data[i].team_name + ')'));
                    contList.appendChild(document.createElement('br'));

                    contList.appendChild(document.createTextNode(data[i].pass_yds + ' Passing Yards = ' + (data[i].pass_yds/data[i].pass_yards*100).toFixed(2) + '% of Team Total (' + data[i].pass_yards + ' Yards)'));
                    contList.appendChild(document.createElement('br'));

                    contList.appendChild(document.createTextNode(data[i].rec_yds + ' Receiving Yards = ' + (data[i].rec_yds/data[i].rec_yards*100).toFixed(2) + '% of Team Total (' + data[i].rec_yards + ' Yards)'));
                    contList.appendChild(document.createElement('br'));

                    contList.appendChild(document.createTextNode(data[i].rush_yds + ' Rushing Yards = ' + (data[i].rush_yds/data[i].rush_yards*100).toFixed(2) + '% of Team Total (' + data[i].rush_yards + ' Yards)'));
                    contList.appendChild(document.createElement('br'));

                    contList.appendChild(document.createTextNode(data[i].td*6 + ' Points Scored = ' + (data[i].td*6/data[i].points_for*100).toFixed(2) + '% of Team Total (' + data[i].points_for + ' Points)'));
                    contList.appendChild(document.createElement('br'));


                    var closeBtn = document.createElement('button');
                    closeBtn.style.height = '40px';
                    closeBtn.style.width = '120px';
                    closeBtn.innerHTML = 'Close';
                    contList.appendChild(closeBtn);
                    closeBtn.addEventListener('click', clearComparisonList);


                })

                searchList.appendChild(document.createElement('br'));
                searchList.appendChild(document.createElement('br'));

                
            }
            var closeBtn = document.createElement('button');
            closeBtn.style.height = '30px';
            closeBtn.style.width = '120px';
            closeBtn.innerHTML = 'Close';
            searchList.appendChild(closeBtn);
            closeBtn.addEventListener('click', clearSearchList);
        }))
    }
  

  return (
    <div>
        <Navigation/>

      <center>
        <div>
            <br />
            <span id="playerComparisonTitle">PLAYER CONTRIBUTION</span>
            <br /> <br />
            <input type="text" id="searchBar" placeHolder="Enter a Player"></input>
            <br /><br />
            <input type="button" id="searchBtn" value="Search" onClick={() => {search()}}></input>
            <br />
            <ol id="comparisonList"></ol>
            <br /><br />
            <ol id="searchList"></ol>
        </div>
      </center>
      
    </div>
  );
}