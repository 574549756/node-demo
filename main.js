
myButton.addEventListener('click', (e)=>{
    let request = new XMLHttpRequest()   //声明一个XMLHttpRequest对象
    request.onreadystatechange = ()=>{      //状态改变的时候执行
        if(request.readyState === 4){
            console.log('请求和响应都完毕了')
            if(request.status >= 200 && request.status < 300){
                console.log('说明请求成功')
                let string = request.responseText
                let object = Window.JSON.parse(string)
            }else if(request.status >= 400){
                console.log('说明请求失败')
            }
        }
    }
    request.open('GET', 'http://jack.com:8002/xxx')    //配置request 参数 'Method', 'url', '是否异步'后三个一般不传默认就行
    request.send()
})