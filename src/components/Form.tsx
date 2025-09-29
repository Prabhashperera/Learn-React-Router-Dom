/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useState } from "react";

export default function Form({nameList}: {nameList: string[]}) {

    const [value, setValue] = useState("");
    const [filteredNames, setFilteredNames] = useState<string[]>([]);

    useEffect(() => {
        value === "" ? 
        setFilteredNames(nameList) :
        setFilteredNames(nameList.
            filter((name) => 
                name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
        );
    }, [value, nameList])

    return (
        <>
        <form action="">
            <input value={value} onChange={(e) => {setValue(e.target.value)}} type="text" placeholder="Search the Name" />
        </form>

        <div className="content">
            <h1>Data Load here</h1>
            {filteredNames.map((name) => <p>{name}</p>)}
        </div>
        </>
    );
}

