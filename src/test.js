/**
 * Example JavaScript script that executes msbuild.
 */

const { exec } = require("child_process");

const process = exec(
  "c:\\Windows\\Microsoft.NET\\Framework\\v4.0.30319\\MSBuild.exe src\\msbuild.xml",
  (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
    }
    if (stdout) {
      console.log(`Output: ${stdout}`);
    }
  }
);
