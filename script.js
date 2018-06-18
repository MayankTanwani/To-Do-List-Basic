function addToDom() {
    var data = getData()
    var divElement = document.createElement("div")
    var listElement = document.createElement("li")
    listElement.innerText = data

    var delButton = document.createElement("button")
    delButton.innerText = "Delete"
    delButton.addEventListener("click",deleteListItem)

    var upButton = document.createElement("button")
    upButton.innerText = "Up"
    upButton.addEventListener("click",moveUp)

    var downButton = document.createElement("button")
    downButton.innerText = "Down"
    downButton.addEventListener("click",moveDown)

    divElement.appendChild(listElement)
    divElement.appendChild(delButton)
    divElement.appendChild(upButton)
    divElement.appendChild(downButton)

    var itemList = document.getElementById("itemList")
    itemList.appendChild(divElement)
    refreshEntire(itemList)
}

function refreshEntire(itemList) {
    for(var i = 0;i<itemList.children.length;i++)
    {
        itemList.children[i].getElementsByTagName("button")[1].style.visibility = "visible"
        itemList.children[i].getElementsByTagName("button")[2].style.visibility = "visible"
    }
    itemList.firstElementChild.getElementsByTagName("button")[1].style.visibility = "hidden"
    itemList.lastElementChild.getElementsByTagName("button")[2].style.visibility = "hidden"

}

function refresh(itemList)
{
    itemList.lastElementChild.getElementsByTagName("button")[2].style.visibility = "hidden"
    itemList.firstElementChild.getElementsByTagName("button")[1].style.visibility = "hidden"
}


function getData() {
    let inputText = document.getElementById("inputText");
    var data = inputText.value
    inputText.value = ""
    return data
}

function deleteListItem()
{
    var cur_item = this.parentNode
    var parent = this.parentNode.parentNode
    parent.removeChild(cur_item)
    if(item.children.length!=0)
    refreshEntire(parent)
}

function moveDown() {
    console.log("Pressed up")
    var cur_item = this.parentNode
    console.log(cur_item)
    var itemList = this.parentNode.parentNode
    itemList.insertBefore(cur_item.nextSibling,cur_item)
    refreshEntire(itemList)
}

function moveUp()
{
    console.log("Pressed up")
    var cur_item = this.parentNode
    console.log(cur_item)
    var itemList = this.parentNode.parentNode
    itemList.insertBefore(cur_item,cur_item.previousSibling)
    refreshEntire(itemList)
}

