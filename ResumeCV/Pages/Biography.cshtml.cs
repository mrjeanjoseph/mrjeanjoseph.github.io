using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using ResumeCV.Model;

namespace ResumeCV.Pages
{
    public class BiographyModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;

        public BiographyModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }
        [BindProperty]
        public string ReadingTextFiles { get; set; }


        public void OnGet()
        {
            if (string.IsNullOrWhiteSpace(ReadingTextFiles))
            {
                StreamReader swReadFiles = new StreamReader(@"C:\Users\Computer\source\repos\WebDevelopmentPortfolio\ResumeCV\BioFile.txt");
                ReadingTextFiles = swReadFiles.ReadToEnd();
            }

        }

        public IActionResult OnPost()
        {
            return Page();
        }
    }
}
