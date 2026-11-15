
import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";

const path = "./data.json";
const git = simpleGit();

async function updateGitHub() {
  try {
    // Générer la date actuelle
    const date = moment().format("YYYY-MM-DD HH:mm:ss");

    // Préparer les données
    const data = {
      date: date,
    };

    // Écrire dans data.json
    await jsonfile.writeFile(path, data, { spaces: 2 });

    // Ajouter le fichier modifié
    await git.add("data.json");

    // Créer un commit
    await git.commit("Update contribution");

    // Envoyer les modifications sur GitHub
    await git.push("origin", "main");

    console.log("Successfully pushed to GitHub!");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

updateGitHub();
