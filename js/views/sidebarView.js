const SidebarView=({h, keywords, addTerm, removeTerm})=>
    <div>
        <input type = "search" id = "searchText" onChange = {() => this.text = event.target.value}></input>
        <button onClick = {() => addTerm(this.text)}>Add term</button>
        <table>
            <tbody>
            {keywords.map(keyword =>
            <tr id = {keyword}>
                <td><button onClick={e=>{removeTerm(keyword); document.getElementById(keyword)}}>x</button></td>
                <td>{keyword}</td>
            </tr>)}
            </tbody>
        </table>
    </div>;