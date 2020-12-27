using System;
using System.IO;
using System.Text;

namespace TestingCodes
{
    class Program
    {
        static void Main(string[] args)
        {

            try
            {
                SearchforText("voluptate");
                //ReadTxt();
                //WriteTxt();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                Console.ReadKey();
                throw;
            }

        }

        private static void SearchforText(string someTxt)
        {
            Console.WriteLine("Searching...");
            StreamReader swReadFiles = new StreamReader("../../../txtFile.txt");
            string readingFiles = swReadFiles.ReadLine();

            while (readingFiles != null)
            {
                if (readingFiles.Contains(someTxt))
                {
                    Console.WriteLine(readingFiles); 
                }
                readingFiles = swReadFiles.ReadLine();
            }

            Console.WriteLine("Closing File...");
            swReadFiles.Close();
        }

        private static void ReadTxt()
        {
            Console.WriteLine("Reading...");
            StreamReader swReadFiles = new StreamReader("../../../txtFile.txt");
            string readingFiles = swReadFiles.ReadLine();

            while(readingFiles !=null)
            {
                Console.WriteLine(readingFiles);
                readingFiles = swReadFiles.ReadLine();
                
            }

            Console.WriteLine("Closing File...");
            swReadFiles.Close();
        }

        static void WriteTxt()
        {
            Console.WriteLine("Writting...");
            StreamWriter swWritingFiles = new StreamWriter("../../../txtFile.txt", true);
            swWritingFiles.WriteLine("Some text has been save to the file");
            swWritingFiles.WriteLine("Another piece of text was writting to the file.");
            swWritingFiles.Close();
        }

        private static void WithStringNStremReader()
        {
            string text;
            var filestream = new FileStream(@"C:\Users\Computer\source\repos\WebDevelopmentPortfolio\TestingCodes\Files\SampleText.txt", FileMode.Open, FileAccess.Read);
            using (var streamReader = new StreamReader(filestream, Encoding.UTF8))
            {
                text = streamReader.ReadToEnd();
            }
            Console.WriteLine(text);
        }

        private static void ReadingFilesUsingString() // Read Text File into String
        {
            string readingFiles = File.ReadAllText(@"C:\Users\Computer\source\repos\WebDevelopmentPortfolio\TestingCodes\Files\SampleText.txt");

            if (readingFiles.Contains("unkown"))
            {
                Console.WriteLine(readingFiles);
            }
            else
            {
                Console.WriteLine("I cannot find this word");
            }
        }
    }
}
