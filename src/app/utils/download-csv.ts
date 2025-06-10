export function downloadCSV(data : any[]){
    if( !data || data.length === 0){
      return
    }

    const columns = Object.keys(data[0]);

    const csvHeader = columns.join(',') + '\n';

    const csvRows = data.map( row =>{
      return columns.map( col =>{
        let cell = row[col] ?? '';

        if( typeof row[col] === 'string'){
          // escape double quotes
          cell = cell.replace(/"/g,'""');
  
          // wrap cell in double quotes if needed
          if( cell.includes(',') || cell.includes('"') || cell.includes('\n')){
            cell = `"${cell}"`
          }
        }

        return cell
      }).join(',');
    }).join('\n');

    // combine header + rows
    const csvContent = csvHeader + csvRows;


    // create blob and trigger download\
    const blob = new Blob([csvContent], { type : 'text/csv;charset=utf-8'});
    const url = URL.createObjectURL(blob);

    const link  = document.createElement('a');
    link.href = url;
    link.download = 'sku-master.csv'
    link.click();
  }