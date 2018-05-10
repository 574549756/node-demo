window.jQuery = function(nodeOrSelector){
    let nodes = {}
    nodes.addClass = function(){}
    nodes.html = function(){}
    return nodes
}
window.$ = window.jQuery

window.jQuery.ajax = function({url, method, body, headers}){    //解构赋值
    return new Promise(function(resolve, reject){   //返回一个promise对象
        let request = new XMLHttpRequest()   //声明一个XMLHttpRequest对象
        request.open(method, url)    //配置request 参数 'Method', 'url', '是否异步'后三个一般不传默认就行    
        for(let key in headers){
            let value = headers[key]
            request.setRequestHeader(key,value)
        }
        request.onreadystatechange = ()=>{      //状态改变的时候执行
            if(request.readyState === 4){
                if(request.status >= 200 && request.status < 300){
                    resolve.call(undefined, request.responseText)
                }else if(request.status >= 400){
                    reject.call(undefined, request)
                }
            }
        }
        request.send(body)        
    })
}

function f1(responseText){}
function f2(responseText){}

myButton.addEventListener('click', (e)=>{
    window.jQuery.ajax({
        url: '/xxx',
        method: 'get',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Oracle': '24'
        },
        body: 'a=1&b=2', 
    }).then(
        (text)=>{console.log(text)}, 
        (request)=>{console.log(request)})
})

