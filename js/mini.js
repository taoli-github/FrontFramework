//#region 获取url中的参数
function GetRequest(key) {
    var url = location.search.toLowerCase(); //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest[key.toLowerCase()];
}

// 获取good info
function getGoodInfo(id,server_adress,ip_port)
{
    var re_data = "";
    var v_url = "http://" + server_adress + ":"+ip_port+"/api/good";
    $.ajax({
        url: v_url + "?ID=" + id,
        type:"GET",
        async:false,
        success:function(data,textStatus,jqXhr){
            //console.log(data);
            re_data = eval("(" + data + ")");
        },
        error:function(err){
            alert(err);
        }
    });

    return re_data;
}

// 获取goodlist {id}
function getGoodListId(server_ip,ip_port)
{
    var good_list = "";
    var v_url = "http://" + server_ip +":"+ip_port+"/api/goodlist";
    $.ajax({
        url: v_url,
        type:"GET",
        async:false,
        success:function(data,textStatus,jqXhr){
            //console.log(data);
            good_list = eval(data);
        },
        error:function(err){
            alert(err);
        }
    });
    return good_list;
}
// task list
function getTaskList(server_ip,ip_port)
{
    var task_list = "";
    var v_url = "http://" + server_ip +":"+ip_port+"/api/tasklist";
    $.ajax({
        url: v_url,
        type:"GET",
        async:false,
        success:function(data,textStatus,jqXhr){
            //console.log(data);
            task_list = eval(data);
        },
        error:function(err){
            alert(err);
        }
    });
    return task_list;
}
// task info
function getTaskInfo(id,server_adress,ip_port)
{
    var re_data = "";
    var v_url = "http://" + server_adress + ":"+ip_port+"/api/task";
    $.ajax({
        url: v_url + "?ID=" + id,
        type:"GET",
        async:false,
        success:function(data,textStatus,jqXhr){
            //console.log(data);
            re_data = eval("(" + data + ")");
        },
        error:function(err){
            alert(err);
        }
    });

    return re_data;
}
