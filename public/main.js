console.log('this is main.js')
let n = 1
getCSS.onclick = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('get', '/style.css')
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            const style = document.createElement("style")
            style.innerHTML = xhr.response
            document.head.appendChild(style)
        }
    }
    xhr.send()
}
getJS.onclick = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('get', '/2.js')
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            const script = document.createElement("script")
            script.innerHTML = xhr.response
            document.body.appendChild(script)
        }
    }
    xhr.send()
}
getHTML.onclick = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('get', '/3.html')
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            const div = document.createElement('div')
            div.innerHTML = xhr.response
            document.body.appendChild(div)
        }
    }
    xhr.send()
}
getXML.onclick = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('get', '/4.xml')
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            const xmldom = xhr.responseXML
            const h1 = document.getElementsByTagName('h1')[0]
            h1.innerHTML = h1.innerHTML + xmldom.getElementsByTagName('name')[0].innerHTML
            // document.body.appendChild(h2)
        }
    }
    xhr.send()
}
getJSON.onclick = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('get', '/5.json')
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const obj = JSON.parse(xhr.response)
            for (key in obj) {
                console.log(key + ":" + obj[key])
            }
        }
    }
    xhr.send()
}
getNext.onclick = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('get', `/page${n + 1}`)
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const array = JSON.parse(xhr.response)
            array.forEach(element => {
                const li = document.createElement('li')
                li.innerText = element.id
                xxx.appendChild(li)
            })
            n += 1
        }

    }
    xhr.send()
}