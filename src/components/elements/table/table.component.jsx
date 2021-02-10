import React from 'react';

const Table = ({rows}) => (
    <table className="table-auto text-white-0">
        {rows.map((row, i) => {
            if (i === 0 ) {
                return ( 
                    <thead key={i}>
                        <tr>
                            {row.map((col, i) => <th className="border-4 border-white-default bg-primary-default p-6 text-left text-lg md:text-xl heading-font font-black italic" key={i}>{col}</th>)}
                        </tr>
                    </thead> 
                )
            } else {
                return ( 
                    <tbody key={i}>
                        <tr>
                            {row.map((col, i) => {
                                if (i === 0 ) {
                                    return ( 
                                    <th className="border-4 border-white-default bg-primary-default p-6 text-right text-lg md:text-xl heading-font font-black italic" key={i}>{col}</th>
                                    )
                                } else {
                                    return ( 
                                    <th className="border-4 border-white-default bg-primary-default p-6 text-left font-light" key={i}>{col}</th>
                                    )
                                }
                            })}
                        </tr>
                    </tbody> 
                )
            }
        })}
    </table>
)

export default Table;