

# SlimmingApp


The **SlimmingApp** API will allow queries against the Mongodb database to obtain and record food information.


####Install Server

`$ npm install

####Run Server

`$ npm start

####Postman endpoints Category


GET
http://localhost:8000/api/category  -> show list Category 

POST
http://localhost:8000/api/category/create -> create Category  

	name: {
        type: String,
        trim: true,
        required: true,
        unique: true
    	}
example

	{
    	"name":"ideal",
    	}

DELETE
http://localhost:8000/api/category/:categoryId -> delete food  



####Postman endpoints Food

GET
http://localhost:8000/api/food  -> show list food 

POST
http://localhost:8000/api/food/create -> create food  

	name : 
	{ 
        type: String,
        trim: true,
        required: true,
        unique: true
    },
	
    calories: {
        type: Number,
        trim: true,
        require: true,
        maxlength: 32,
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        require: true
    }
	
example 

	{
    	"name":"orange",
    	"calories": 50,
    	"category": "6353bc55bb46c7679493ab25"
	}	
	
DELETE
http://localhost:8000/api/food/:foodId-> delete food  
