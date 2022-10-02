import sql from "sqlite3";

export default class SQL{
    private database = new sql.Database('burgerBuilder', sql.OPEN_READWRITE);
    serial = this.database.serialize(() => {
        this.database.run("CREATE TABLE Users (ID int NOT NULL AUTO_INCREMENT, )");
        this.database.run("CREATE TABLE UserData ()");
        this.database.run("CREATE TABLE UserHistory ()");
        this.database.run("CREATE TABLE UserProfile ()");
        const stmt = this.database.prepare("INSERT INTO lorem VALUES (?)");
        for (let i = 0; i < 10; i++) {
            stmt.run("Ipsum " + i);
        }
        stmt.finalize();
    
        this.database.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
            console.log(row.id + ": " + row.info);
        });
    });
}