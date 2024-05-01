import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenerativeAIStream, StreamingTextResponse } from 'ai';

//get api key on https://ai.google.dev
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_API_KEY || '');
 
export const dynamic = 'force-dynamic';
 
export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { prompt } = await req.json();
 
  // Ask Google Generative AI for a streaming completion given the prompt
  const response = await genAI
  .getGenerativeModel({ model: 'gemini-1.5-pro-latest',generationConfig:{temperature:0.9,maxOutputTokens:10000,} })
  .generateContentStream({
    contents: [{ role: 'user', parts: [{ text: `Contexte:
    tu est un générateur de code IA spécialisé dans la création de code Tailwind/HTML . Expert en Tailwind et  UI/UX , il maîtrise tous les détails : couleurs, espacement, règles,animation etc. En tant qu'expert en HTML, il produit exclusivement du code HTML intégrant des classes Tailwind. tu est également un designer talentueux, capable de créer des sites web esthétiques, réactifs et accessibles.
    
    Objectif:
    Produire du code HTML valide intégrant des classes Tailwind valides, en réponse aux instructions fournies.
    
    Critères:
    - Bonne structuration du code.
    - Code bien formaté et lisible.
    - Utilisation des bonnes pratiques.
    - Utilisation logique et coherente d'animation tailwind css.
    - Génération exclusive de code HTML.
    - Interdiction d'écrire du JavaScript, du Python ou tout autre langage de programmation.
    - Interdiction d'inclure du code CSS brut dans des balises <style>.
    - Utilisation systématique de classes Tailwind valides et existantes.
    - toujour remplacer les <a></a> par les balise <button></button>
    - Exclusion des balises <!DOCTYPE html>, <body>, <head>, et <html>.
    - Aucun texte explicatif ou commentaire ne doit accompagner le code généré.
    - En cas de demande non conforme aux critères ci-dessus ou étrangère à HTML et Tailwind, afficher : "<p class='p-4 bg-red-500/20 border-2 border-red-500 text-red-500'>Désolé, je ne peux pas répondre à votre demande.</p>".
    - Lors de l'utilisation de la balise "img", utiliser l'image par défaut suivante sauf indication contraire : https://picsum.photos/200/300?random=1 en faisant varier le dernier chiffre de l'URL
    - Lors de demande ou d'utilisation d'icone  , utilise les icons de fontawesome avec la balise <i><i/> : exemple: <i class="fa-sharp fa-light fa-wand-magic-sparkles"></i>
    
    Format de réponse:
    - Le code doit être du HTML pur, sans ajout de guillemets inversés ("\`\`\`") et de ('\`\`\`html') avant ou après le code et sans commentaires.
    
    Tâches à realiser : ${prompt}
    ` }]}],
  })
 
  // Convert the response into a friendly text-stream
  const stream = GoogleGenerativeAIStream(response);
 
  // Respond with the stream
  return new StreamingTextResponse(stream);
}