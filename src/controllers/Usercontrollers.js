import config from "../db/config.js";
import sql from 'mssql';



// RETRIEVING data from specific of the three tables
export const retrieveUser = async(req,res) =>{

    try {
        const { user_id } = req.params;
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input("user_id", sql.Int, user_id)
            .query("select * from Users where user_id = @user_id");
            res.status(200).json(result.recordset);
            // res.send(result)

    } catch (error) {

        res.status(201).json( error.message);

    } finally {
        sql.close();
    }
};

export const retrievePost = async(req,res) =>{

    try {
        const { post_id } = req.params;
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input("post_id", sql.Int, post_id)
            .query("select * from Posts where post_id = @post_id");
            res.status(200).json(result.recordset);
            // res.send(result)

    } catch (error) {

        res.status(201).json( error.message);

    } finally {
        sql.close();
    }
};
export const retrieveComment = async(req,res) =>{

    try {
        const { comment_id } = req.params;
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input("comment_id", sql.Int, comment_id)
            .query("select * from Comments where comment_id = @comment_id");
            res.status(200).json(result.recordset);
            // res.send(result)

    } catch (error) {

        res.status(201).json( error.message);

    } finally {
        sql.close();
    }
};

// CREATING ALL

export const createUser = async (req, res) => {
    try {
        const { user_id,username,email,password} = req.body;
        let pool = await sql.connect(config.sql)
            await pool.request()
            .input("user_id", sql.Int, user_id) 
            .input("username", sql.VarChar, username) 
            .input("email", sql.VarChar, email) 
            .input("password", sql.VarChar, password) 

            .query("INSERT into Users (user_id,username,email,password) values (@user_id@username,@email,@password)")
            
    } catch (error) {
        res.status(201).json( error.message);
    } finally {
        sql.close();   
    }
};

export const createPost = async (req, res) => {
    try {
        const { post_id,title,content,user_id} = req.body;
        let pool = await sql.connect(config.sql)
            await pool.request()
            .input("post_id", sql.Int, post_id) 
            .input("title", sql.VarChar, title) 
            .input("content", sql.Text, content) 
            .input("user_id", sql.Int, user_id) 

            .query("INSERT into Posts (post_id,title,content,user_id) values (@post_id@title,@content,@user_id)")
            
    } catch (error) {
        res.status(201).json( error.message);
    } finally {
        sql.close();   
    }
};
export const createComment = async (req, res) => {
    try {
        const { comment_id,content,user_id,post_id} = req.body;
        let pool = await sql.connect(config.sql)
            await pool.request()
            .input("comment_id", sql.Int, comment_id) 
            .input("content", sql.VarChar, content) 
            .input("user_id", sql.VarChar, user_id) 
            .input("post_id", sql.VarChar, post_id) 

            .query("INSERT into Comments (comment_id,content,user_id,post_id) values (@comment_id,@content,@user_id,@post_id)")
            
    } catch (error) {
        res.status(201).json( error.message);
    } finally {
        sql.close();   
    }
};

// DELETE

export const deleteUser = async (req, res) => {
    try {
        const { user_id } = req.params;
        await sql.connect(config.sql);
        await sql.query`DELETE FROM Users WHERE user_id = ${user_id}`;
        res.status(200).json({ message: 'Deletion done succesfully' });
    } catch (error) {
        res.status(201).json( error.message);
    } finally {
        sql.close();
    }
};

export const deletePost = async (req, res) => {
    try {
        const { post_id } = req.params;
        await sql.connect(config.sql);
        await sql.query`DELETE FROM Posts WHERE post_id = ${post_id}`;
        res.status(200).json({ message: 'Deletion done succesfully' });
    } catch (error) {
        res.status(201).json( error.message);
    } finally {
        sql.close();
    }
};

export const deleteComment = async (req, res) => {
    try {
        const { coment_id } = req.params;
        await sql.connect(config.sql);
        await sql.query`DELETE FROM Comments WHERE coment_id = ${coment_id}`;
        res.status(200).json({ message: 'Deletion done succesfully' });
    } catch (error) {
        res.status(201).json( error.message);
    } finally {
        sql.close();
    }
};

// UPDATES


