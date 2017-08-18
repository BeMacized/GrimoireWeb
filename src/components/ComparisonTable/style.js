export default `
.table td:first-child {
    text-align: left;    
}

.table tr {
    border:none;    
}

.table td {
    text-align: center;
    vertical-align: center; 
    border:none;        
}

.table thead img {
    border-radius: 100%;
    width: 64px;
    height: 64px;
    margin: 7px;
    border: 2px solid #FFF;
}

.table td:nth-child(2) {
    background-color: #FFF;
    border: 2px solid #f857a6;    
    border-top: none;
    border-bottom: none;    
    color: #f857a6;
    font-size: 1.25em;    
}

.table tbody tr:nth-child(odd) td:nth-child(2) {
    background-color: #FFF5F9;
}

.table tfoot td:nth-child(2) {
    border-bottom: 2px solid #f857a6;    
}

.table tfoot td:nth-child(2) button {
    background: linear-gradient(90deg, #f857a6, #ff5858);
    font-weight: bold;
    color:#FFF !important;
}

.categoryRow {
    background: linear-gradient(90deg, #f857a6, #ff5858);
    color: #FFF;
    font-weight:bold;
}

.categoryRow a {
    color: #FFF !important;
    font-weight:bold;
}

.table thead {
    background: linear-gradient(90deg, #f857a6, #ff5858);
    color: #FFF;    
    font-weight:bold;
    width: 100%;
    border:none;
}
`
