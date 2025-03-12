const http = require("http");
const fs = require("fs");
const url = require("url");

const filePath = "db.json";

const getData = () => {

    if (!fs.existsSync(filePath)) {
        const initData = { emp: [] };
        fs.writeFileSync(filePath, JSON.stringify(initData));
        return initData;
    }
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
};

const saveData = (data) => fs.writeFileSync(filePath, JSON.stringify(data,null,2));

const server = http.createServer((req, res) => {


    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        res.writeHead(204);
        return res.end();
    }





    const parsedUrl = url.parse(req.url, true);


    const dataStore = getData();
    
    // console.log(parsedUrl)

    if (req.method === "GET" && parsedUrl.pathname === "/emp") {

        res.writeHead(200, { "Content-Type": "application/json" });

        return res.end(JSON.stringify(dataStore.emp));
    }

    else if (req.method === "GET" && parsedUrl.pathname.startsWith("/emp/")) {


        const id = Number(parsedUrl.pathname.split("/")[2]);

        const emp = dataStore.emp.find((e) => e.id === id);

        if (!emp) {
            res.writeHead(404, { "Content-Type": "application/json" });
            return res.end(JSON.stringify({ error: "Employee not found" }));
        }


        res.writeHead(200, { "Content-Type": "application/json" });


        return res.end(JSON.stringify(emp));

    }




    else if (req.method === "POST" && parsedUrl.pathname === "/emp") {

        let body = "";

        req.on("data", (chunk) => { body += chunk; });

        req.on("end", () => {


            if (!body) {

                res.writeHead(400, { "Content-Type": "application/json" });
                return res.end(JSON.stringify({ error: "Empty request body" }))

            }

            try {

                const newEmp = JSON.parse(body);

                newEmp.id = Date.now(); 


                dataStore.emp.push(newEmp);

                saveData(dataStore);

                res.writeHead(201, { "Content-Type": "application/json" });
                res.end(JSON.stringify(newEmp));

            } catch (error) {
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ error: "Invalid JSON format" }));
            }
        });
    }


    else if (req.method === "PUT" && parsedUrl.pathname.startsWith("/emp/")) {

        const id = Number(parsedUrl.pathname.split("/")[2]);
        let body = "";


        req.on("data", (chunk) => { body += chunk; });

        req.on("end", () => {

            if (!body) {


                res.writeHead(400, { "Content-Type": "application/json" });
                return res.end(JSON.stringify({ error: "Empty request body" }));


            }

            try {
                const updatedEmp = JSON.parse(body);

                const index = dataStore.emp.findIndex((e) => e.id === id);


                if (index !== -1) {

                    dataStore.emp[index] = { 
                        ...dataStore.emp[index],
                         ...updatedEmp, 
                         id 
                        }; 

                    saveData(dataStore);

                    res.writeHead(200, { "Content-Type": "application/json" });
                    return res.end(JSON.stringify(dataStore.emp[index]));

                } else {
                    res.writeHead(404, { "Content-Type": "application/json" });
                    return res.end(JSON.stringify({ error: "Employee not found" }));
                }
            } catch (error) {

                res.writeHead(400, { "Content-Type": "application/json" });
                return res.end(JSON.stringify({ error: "Invalid JSON format" }));

            }
        });
    }



    else if (req.method === "DELETE" && parsedUrl.pathname.startsWith("/emp/")) {




        const id = Number(parsedUrl.pathname.split("/")[2]);


        const updatedEmpList = dataStore.emp.filter((e) => e.id !== id);

        if ( dataStore.emp.length   ===   updatedEmpList.length ) {


            res.writeHead(404, { "Content-Type": "application/json" });
            return res.end(JSON.stringify({ error: "Employee not found" }))  



        }



        dataStore.emp = updatedEmpList;



        saveData(dataStore);



        res.writeHead(200, { "Content-Type": "text/plain" });
        return res.end("Employee deleted successfully");


    }

    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Route not found" }));
    }
});



server.listen(3000, () => console.log("Server running on http://localhost:3000"));
