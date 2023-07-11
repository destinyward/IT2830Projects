        function myFunction() {
           var element = document.body;
           element.classList.toggle("dark-mode");
        }
            var a = 0;
            
            function removeList(id){
                $("." + String(id)).remove();
            }
            
            
            function addElement(){
                a++;
                console.log("Test");
                var titleInfo = $("#titleInfo").val();
                var typeInfo = $("#typeInfo").val();
                var priorityInfo = $("#priorityInfo").val();
                var dateInfo = $("#dateInfo").val();
                
                var realList= document.getElementById("topElements");
                
                var list = document.createElement("li");
                list.classList.add(String(a));
                
                var div = document.createElement("div");
                div.style = "#grid.layout";
                
                var title = document.createElement("h5");
                var type = document.createElement("h5");
                var priority = document.createElement("h5");
                var date = document.createElement("h5");
                var actionButton = document.createElement("h5");
                
                actionButton.addEventListener("click", function (){
                    removeList(a);
                });
                
                
                switch (Number(priorityInfo)){
                    case 0:
                        priorityInfo = "None";
                        break;
                        
                    case 1:
                        priorityInfo = "*";
                        break;
                        
                    case 2:
                        priorityInfo = "**";
                        break;
                        
                    case 3:
                        priorityInfo = "***";
                        break;
                        
                    case 4: 
                        priorityInfo = "****";
                        break;
                        
                    case 5: 
                        priorityInfo = "*****";
                        break;
                        
                    case 6:
                        priorityInfo = "******"
                    default:
                        priorityInfo = "None";
                }
                
                $(title).html(titleInfo);
                div.appendChild(title);
                
                $(type).html(typeInfo);
                div.appendChild(type);
                
                $(priority).html(priorityInfo);
                div.appendChild(priority);
                
                $(date).html(dateInfo);
                div.appendChild(date);
                
                $(actionButton).html('<i class="fas fa-check" aria-hidden="true"></i>');
                div.appendChild(actionButton);
                
                list.appendChild(div);
                realList.appendChild(list);
                
            }
            
            function clearElement(){
                $("#titleInfo").val("");
                $("#typeInfo").val("type");
                $("#priorityInfo").val("0");
                $("#dateInfo").val("");
            }