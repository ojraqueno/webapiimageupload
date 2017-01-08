# webapiimageupload
Source code accompanying my blog post "End-to-End Image Upload with Azure Storage, AngularJS, and Web API" at http://www.ojdevelops.com/2016/05/end-to-end-image-upload-with-azure.html

### Running the application ###
When the application is run, you will not be able to access the home page until you register a new user. That is the implementation of the default SPA Template in Visual Studio, which I used when creating this repository.

### Using a storage account ###
The storage connection string in the `web.config` file uses an Azure storage account I used for testing, which no longer exists. Make sure to replace the connection string with your own.
