import React from "react";
import './PlayerSearch.css';
import  Navigation  from "../Navigation/Navigation";


export default function PlayerSearch() {

    function clearLeftList(){
        var leftList = document.getElementById('leftSearchList');
        while(leftList.firstChild){
            leftList.removeChild(leftList.firstChild);
        }
    };

    function clearLeftStatsList(){
        var leftStatsList = document.getElementById('leftStatsList');
        while(leftStatsList.firstChild){
            leftStatsList.removeChild(leftStatsList.firstChild);
        }
    }

    function leftOffSearch(){
        var input = document.getElementById('leftSearchBar').value;

        fetch('/off/stats/' + input).then((res) =>
        res.json().then((data) => {

            var searchList = document.getElementById('leftSearchList');

            for(let i=0; i<data.length; i++){
                searchList.appendChild(document.createTextNode(data[i].pf_name + ' ' + data[i].pl_name + ' (' + data[i].team_name + ') ' + '\xa0\xa0\xa0'));
                

                var statsBtn = document.createElement('button');
                statsBtn.style.height = '40px';
                statsBtn.style.width = '150px';
                statsBtn.innerHTML = 'Get Stats';
                statsBtn.style.fontSize = '20px'

                statsBtn.addEventListener('click', () => {

                    var statsList = document.getElementById('leftStatsList');
                    
                    while(statsList.firstChild){
                        statsList.removeChild(statsList.firstChild);
                    }

                    statsList.appendChild(document.createTextNode(data[i].pf_name + ' ' + data[i].pl_name +  ' Stats:'));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Passing Completions: ' + data[i].pass_comp + '/' + data[i].pass_att));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Completion Percentage: ' + data[i].comp_pct + '%'));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Passing Yards: ' + data[i].pass_yds));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Passing TDs: ' + data[i].pass_td));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Passing INTs: ' + data[i].pass_int));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Rushing Attempts: ' + data[i].rush_att));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Rushing Yards: ' + data[i].rush_yds));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Yards Per Rush: ' + data[i].rush_avg));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Rushing TDs: ' + data[i].rush_td));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Targets: ' + data[i].tar));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Receptions: ' + data[i].rec));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Receiving Yards: ' + data[i].rec_yds));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Yards Per Reception: ' + data[i].rec_avg));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Receiving TDs: ' + data[i].rec_td));
                    statsList.appendChild(document.createElement('br'));

                    var closeBtn = document.createElement('button');
                    closeBtn.style.height = '45px';
                    closeBtn.style.width = '160px';
                    closeBtn.innerHTML = 'Close';
                    closeBtn.addEventListener('click', () => {
                        while(statsList.firstChild){
                            statsList.removeChild(statsList.firstChild);
                        }
                    });
                    statsList.appendChild(document.createElement('br'));
                    statsList.appendChild(closeBtn);



                    
                })

                searchList.appendChild(statsBtn);
                searchList.appendChild(document.createElement('br'));
                searchList.appendChild(document.createElement('br'));

                
            }
            var closeBtn = document.createElement('button');
            closeBtn.style.height = '45px';
            closeBtn.style.width = '160px';
            closeBtn.innerHTML= 'Close';
            closeBtn.addEventListener('click', clearLeftList);
            searchList.appendChild(closeBtn);
            searchList.appendChild(document.createElement('br'));
        }))
    };

    function leftDefSearch(){
        var input = document.getElementById('leftSearchBar').value;

        fetch('/def/stats/' + input).then((res) =>
        res.json().then((data) => {

            var searchList = document.getElementById('leftSearchList');

            for(let i=0; i<data.length; i++){
                searchList.appendChild(document.createTextNode(data[i].pf_name + ' ' + data[i].pl_name + ' (' + data[i].team_name + ') ' + '\xa0\xa0\xa0'));
                

                var statsBtn = document.createElement('button');
                statsBtn.style.height = '40px';
                statsBtn.style.width = '150px';
                statsBtn.innerHTML = 'Get Stats';
                statsBtn.style.fontSize = '20px'

                statsBtn.addEventListener('click', () => {

                    var statsList = document.getElementById('leftStatsList');
                    
                    while(statsList.firstChild){
                        statsList.removeChild(statsList.firstChild);
                    }

                    statsList.appendChild(document.createTextNode(data[i].pf_name + ' ' + data[i].pl_name +  ' Stats:'));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Tackles: ' + data[i].def_tackles));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Sacks: ' + data[i].def_sacks));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Interceptions: ' + data[i].def_int));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Touchdowns: ' + data[i].def_td));
                    statsList.appendChild(document.createElement('br'));

                    var closeBtn = document.createElement('button');
                    closeBtn.style.height = '45px';
                    closeBtn.style.width = '160px';
                    closeBtn.innerHTML = 'Close';
                    closeBtn.addEventListener('click', () => {
                        while(statsList.firstChild){
                            statsList.removeChild(statsList.firstChild);
                        }
                    });
                    statsList.appendChild(document.createElement('br'));
                    statsList.appendChild(closeBtn);



                    
                })

                searchList.appendChild(statsBtn);
                searchList.appendChild(document.createElement('br'));
                searchList.appendChild(document.createElement('br'));
            }
        }))
    };

    function leftKickSearch(){
        var input = document.getElementById('leftSearchBar').value;

        fetch('/kick/stats/' + input).then((res) =>
        res.json().then((data) => {

            var searchList = document.getElementById('leftSearchList');

            for(let i=0; i<data.length; i++){
                searchList.appendChild(document.createTextNode(data[i].pf_name + ' ' + data[i].pl_name + ' (' + data[i].team_name + ') ' + '\xa0\xa0\xa0'));
                

                var statsBtn = document.createElement('button');
                statsBtn.style.height = '40px';
                statsBtn.style.width = '150px';
                statsBtn.innerHTML = 'Get Stats';
                statsBtn.style.fontSize = '20px'

                statsBtn.addEventListener('click', () => {

                    var statsList = document.getElementById('leftStatsList');
                    
                    while(statsList.firstChild){
                        statsList.removeChild(statsList.firstChild);
                    }

                    statsList.appendChild(document.createTextNode(data[i].pf_name + ' ' + data[i].pl_name +  ' Stats:'));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Extra Points: ' + data[i].xp_made + '/' + data[i].xp_att));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Field Goals: ' + data[i].fg_made + '/' + data[i].fg_att));
                    statsList.appendChild(document.createElement('br'));

                    

                    var closeBtn = document.createElement('button');
                    closeBtn.style.height = '45px';
                    closeBtn.style.width = '160px';
                    closeBtn.innerHTML = 'Close';
                    closeBtn.addEventListener('click', () => {
                        while(statsList.firstChild){
                            statsList.removeChild(statsList.firstChild);
                        }
                    });
                    statsList.appendChild(document.createElement('br'));
                    statsList.appendChild(closeBtn);



                    
                })

                searchList.appendChild(statsBtn);
                searchList.appendChild(document.createElement('br'));
                searchList.appendChild(document.createElement('br'));
            }
        }))
    };

    function leftTeamSearch(){
        var input = document.getElementById('leftSearchBar').value;

        fetch('/team/stats/' + input).then((res) =>
        res.json().then((data) => {

            var searchList = document.getElementById('leftSearchList');

            for(let i=0; i<data.length; i++){
                searchList.appendChild(document.createTextNode(data[i].team_city + ' ' + data[i].team_name + '\xa0\xa0\xa0'));
                

                var statsBtn = document.createElement('button');
                statsBtn.style.height = '40px';
                statsBtn.style.width = '150px';
                statsBtn.innerHTML = 'Get Stats';
                statsBtn.style.fontSize = '20px'

                statsBtn.addEventListener('click', () => {

                    var statsList = document.getElementById('leftStatsList');
                    
                    while(statsList.firstChild){
                        statsList.removeChild(statsList.firstChild);
                    }

                    statsList.appendChild(document.createTextNode(data[i].team_city + ' ' + data[i].team_name +  ' Stats:'));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Record: ' + data[i].games_won + '-' + data[i].games_lost + '-' + data[i].games_tied));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Points For: ' + data[i].points_for));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Rushing Yards: ' + data[i].rush_yards));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Passing Yards: ' + data[i].pass_yards));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Total Yards: ' + data[i].total_yards));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Points Against: ' + data[i].points_against));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Rushing Yards Against: ' + data[i].rush_yards_against));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Passing Yards Against: ' + data[i].pass_yards_against));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Total Yards Against: ' + data[i].total_yards_against));
                    statsList.appendChild(document.createElement('br'));

                    var closeBtn = document.createElement('button');
                    closeBtn.style.height = '45px';
                    closeBtn.style.width = '160px';
                    closeBtn.innerHTML = 'Close';
                    closeBtn.addEventListener('click', () => {
                        while(statsList.firstChild){
                            statsList.removeChild(statsList.firstChild);
                        }
                    });
                    statsList.appendChild(document.createElement('br'));
                    statsList.appendChild(closeBtn);



                    
                })

                searchList.appendChild(statsBtn);
                searchList.appendChild(document.createElement('br'));
                searchList.appendChild(document.createElement('br'));
            }
        }))
    };






    function clearRightList(){
        var rightList = document.getElementById('rightSearchList');
        while(rightList.firstChild){
            rightList.removeChild(rightList.firstChild);
        }
    };

    function clearRightStatsList(){
        var rightStatsList = document.getElementById('rightStatsList');
        while(rightStatsList.firstChild){
            rightStatsList.removeChild(rightStatsList.firstChild);
        }
    }

    function rightOffSearch(){
        var input = document.getElementById('rightSearchBar').value;

        fetch('/off/stats/' + input).then((res) =>
        res.json().then((data) => {

            var searchList = document.getElementById('rightSearchList');

            for(let i=0; i<data.length; i++){
                searchList.appendChild(document.createTextNode(data[i].pf_name + ' ' + data[i].pl_name + ' (' + data[i].team_name + ') ' + '\xa0\xa0\xa0'));
                

                var statsBtn = document.createElement('button');
                statsBtn.style.height = '40px';
                statsBtn.style.width = '150px';
                statsBtn.innerHTML = 'Get Stats';
                statsBtn.style.fontSize = '20px'

                statsBtn.addEventListener('click', () => {

                    var statsList = document.getElementById('rightStatsList');
                    
                    while(statsList.firstChild){
                        statsList.removeChild(statsList.firstChild);
                    }

                    statsList.appendChild(document.createTextNode(data[i].pf_name + ' ' + data[i].pl_name +  ' Stats:'));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Passing Completions: ' + data[i].pass_comp + '/' + data[i].pass_att));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Completion Percentage: ' + data[i].comp_pct + '%'));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Passing Yards: ' + data[i].pass_yds));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Passing TDs: ' + data[i].pass_td));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Passing INTs: ' + data[i].pass_int));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Rushing Attempts: ' + data[i].rush_att));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Rushing Yards: ' + data[i].rush_yds));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Yards Per Rush: ' + data[i].rush_avg));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Rushing TDs: ' + data[i].rush_td));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Targets: ' + data[i].tar));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Receptions: ' + data[i].rec));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Receiving Yards: ' + data[i].rec_yds));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Yards Per Reception: ' + data[i].rec_avg));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Receiving TDs: ' + data[i].rec_td));
                    statsList.appendChild(document.createElement('br'));

                    var closeBtn = document.createElement('button');
                    closeBtn.style.height = '45px';
                    closeBtn.style.width = '160px';
                    closeBtn.innerHTML = 'Close';
                    closeBtn.addEventListener('click', () => {
                        while(statsList.firstChild){
                            statsList.removeChild(statsList.firstChild);
                        }
                    });
                    statsList.appendChild(document.createElement('br'));
                    statsList.appendChild(closeBtn);



                    
                })

                searchList.appendChild(statsBtn);
                searchList.appendChild(document.createElement('br'));
                searchList.appendChild(document.createElement('br'));
            }
            var closeBtn = document.createElement('button');
            closeBtn.style.height = '45px';
            closeBtn.style.width = '160px';
            closeBtn.innerHTML= 'Close';
            closeBtn.addEventListener('click', clearRightList);
            searchList.appendChild(closeBtn);
            searchList.appendChild(document.createElement('br'));
        }))
    };

    function rightDefSearch(){
        var input = document.getElementById('rightSearchBar').value;

        fetch('/def/stats/' + input).then((res) =>
        res.json().then((data) => {

            var searchList = document.getElementById('rightSearchList');

            for(let i=0; i<data.length; i++){
                searchList.appendChild(document.createTextNode(data[i].pf_name + ' ' + data[i].pl_name + ' (' + data[i].team_name + ') ' + '\xa0\xa0\xa0'));
                

                var statsBtn = document.createElement('button');
                statsBtn.style.height = '40px';
                statsBtn.style.width = '150px';
                statsBtn.innerHTML = 'Get Stats';
                statsBtn.style.fontSize = '20px'

                statsBtn.addEventListener('click', () => {

                    var statsList = document.getElementById('rightStatsList');
                    
                    while(statsList.firstChild){
                        statsList.removeChild(statsList.firstChild);
                    }

                    statsList.appendChild(document.createTextNode(data[i].pf_name + ' ' + data[i].pl_name +  ' Stats:'));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Tackles: ' + data[i].def_tackles));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Sacks: ' + data[i].def_sacks));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Interceptions: ' + data[i].def_int));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Touchdowns: ' + data[i].def_td));
                    statsList.appendChild(document.createElement('br'));

                    var closeBtn = document.createElement('button');
                    closeBtn.style.height = '45px';
                    closeBtn.style.width = '160px';
                    closeBtn.innerHTML = 'Close';
                    closeBtn.addEventListener('click', () => {
                        while(statsList.firstChild){
                            statsList.removeChild(statsList.firstChild);
                        }
                    });
                    statsList.appendChild(document.createElement('br'));
                    statsList.appendChild(closeBtn);



                    
                })

                searchList.appendChild(statsBtn);
                searchList.appendChild(document.createElement('br'));
                searchList.appendChild(document.createElement('br'));
            }
        }))
    };

    function rightKickSearch(){
        var input = document.getElementById('rightSearchBar').value;

        fetch('/kick/stats/' + input).then((res) =>
        res.json().then((data) => {

            var searchList = document.getElementById('rightSearchList');

            for(let i=0; i<data.length; i++){
                searchList.appendChild(document.createTextNode(data[i].pf_name + ' ' + data[i].pl_name + ' (' + data[i].team_name + ') ' + '\xa0\xa0\xa0'));
                

                var statsBtn = document.createElement('button');
                statsBtn.style.height = '40px';
                statsBtn.style.width = '150px';
                statsBtn.innerHTML = 'Get Stats';
                statsBtn.style.fontSize = '20px'

                statsBtn.addEventListener('click', () => {

                    var statsList = document.getElementById('rightStatsList');
                    
                    while(statsList.firstChild){
                        statsList.removeChild(statsList.firstChild);
                    }

                    statsList.appendChild(document.createTextNode(data[i].pf_name + ' ' + data[i].pl_name +  ' Stats:'));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Extra Points: ' + data[i].xp_made + '/' + data[i].xp_att));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Field Goals: ' + data[i].fg_made + '/' + data[i].fg_att));
                    statsList.appendChild(document.createElement('br'));

                    

                    var closeBtn = document.createElement('button');
                    closeBtn.style.height = '45px';
                    closeBtn.style.width = '160px';
                    closeBtn.innerHTML = 'Close';
                    closeBtn.addEventListener('click', () => {
                        while(statsList.firstChild){
                            statsList.removeChild(statsList.firstChild);
                        }
                    });
                    statsList.appendChild(document.createElement('br'));
                    statsList.appendChild(closeBtn);



                    
                })

                searchList.appendChild(statsBtn);
                searchList.appendChild(document.createElement('br'));
                searchList.appendChild(document.createElement('br'));
            }
        }))
    };

    function rightTeamSearch(){
        var input = document.getElementById('rightSearchBar').value;

        fetch('/team/stats/' + input).then((res) =>
        res.json().then((data) => {

            var searchList = document.getElementById('rightSearchList');

            for(let i=0; i<data.length; i++){
                searchList.appendChild(document.createTextNode(data[i].team_city + ' ' + data[i].team_name + '\xa0\xa0\xa0'));
                

                var statsBtn = document.createElement('button');
                statsBtn.style.height = '40px';
                statsBtn.style.width = '150px';
                statsBtn.innerHTML = 'Get Stats';
                statsBtn.style.fontSize = '20px'

                statsBtn.addEventListener('click', () => {

                    var statsList = document.getElementById('rightStatsList');
                    
                    while(statsList.firstChild){
                        statsList.removeChild(statsList.firstChild);
                    }

                    statsList.appendChild(document.createTextNode(data[i].team_city + ' ' + data[i].team_name +  ' Stats:'));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Record: ' + data[i].games_won + '-' + data[i].games_lost + '-' + data[i].games_tied));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Points For: ' + data[i].points_for));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Rushing Yards: ' + data[i].rush_yards));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Passing Yards: ' + data[i].pass_yards));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Total Yards: ' + data[i].total_yards));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Points Against: ' + data[i].points_against));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Rushing Yards Against: ' + data[i].rush_yards_against));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Passing Yards Against: ' + data[i].pass_yards_against));
                    statsList.appendChild(document.createElement('br'));

                    statsList.appendChild(document.createTextNode('Total Yards Against: ' + data[i].total_yards_against));
                    statsList.appendChild(document.createElement('br'));

                    var closeBtn = document.createElement('button');
                    closeBtn.style.height = '45px';
                    closeBtn.style.width = '160px';
                    closeBtn.innerHTML = 'Close';
                    closeBtn.addEventListener('click', () => {
                        while(statsList.firstChild){
                            statsList.removeChild(statsList.firstChild);
                        }
                    });
                    statsList.appendChild(document.createElement('br'));
                    statsList.appendChild(closeBtn);



                    
                })

                searchList.appendChild(statsBtn);
                searchList.appendChild(document.createElement('br'));
                searchList.appendChild(document.createElement('br'));
            }
        }))
    };



  return (
    <div>
            <Navigation/>

        <center>
            <br />
            <span id="playerSearchTitle">Player & Team Search</span>
        </center>
      
        <div id="leftDiv">
            <center>
            
            
            <br /><br />
            <select id="leftDrop">
                <option value="offensivePlayer">Offensive Player</option>
                <option value="defensivePlayer">Defensive Player</option>
                <option value="kicker">Kicker</option>
                <option value="team">Team</option>
            </select>
            <br /><br />
            <input type="text" id="leftSearchBar" placeholder="Enter a Player or Team"></input>
            <br /><br />
            <input type="button" id="leftSearchBtn" value="Search" onClick={() => {
                clearLeftStatsList();
                clearLeftList(); 
                if(document.getElementById('leftDrop').value == "offensivePlayer"){
                    leftOffSearch();
                }
                if(document.getElementById('leftDrop').value == 'defensivePlayer'){
                    leftDefSearch();
                }
                if(document.getElementById('leftDrop').value == 'kicker'){
                    leftKickSearch();
                }
                if(document.getElementById('leftDrop').value == 'team'){
                    leftTeamSearch();
                }
                
                }}>

                </input>
            <br />
            <ol id="leftStatsList">

            </ol>
            <br />
            <ol id="leftSearchList">

            </ol>
            </center>
            
        </div>
      
      <div id="rightDiv">
            <center>
            
            
            <br /><br />
            <select id="rightDrop">
                <option value="offensivePlayer">Offensive Player</option>
                <option value="defensivePlayer">Defensive Player</option>
                <option value="kicker">Kicker</option>
                <option value="team">Team</option>
            </select>
            <br /><br />
            <input type="text" id="rightSearchBar" placeholder="Enter a Player or Team"></input>
            <br /><br />
            <input type="button" id="rightSearchBtn" value="Search" onClick={() => {
                clearRightStatsList();
                clearRightList(); 
                if(document.getElementById('rightDrop').value == "offensivePlayer"){
                    rightOffSearch();
                }
                if(document.getElementById('rightDrop').value == 'defensivePlayer'){
                    rightDefSearch();
                }
                if(document.getElementById('rightDrop').value == 'kicker'){
                    rightKickSearch();
                }
                if(document.getElementById('rightDrop').value == 'team'){
                    rightTeamSearch();
                }
                
                }}>
            </input>
            <br />
            <ol id="rightStatsList">

            </ol>
            <br />
            <ol id="rightSearchList">

            </ol>
            </center>
            
        </div>
     
    </div>
  );
}