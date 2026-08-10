function summarize() {
  const text = document.getElementById('input').value;
  const output = document.getElementById('output');
  if(!text) return;
  
  // Heuristic extraction for demonstration of the flow
  const sentences = text.split(/[.!?]/).filter(s => s.length > 20);
  const summary = sentences.slice(0, 3).join('. ');
  const keywords = [...new Set(text.split(/\s+/).filter(w => w.length > 6))].slice(0, 5);
  
  output.innerHTML = `<h3>Summary</h3><p>${summary}...</p><h3>Key Vectors</h3><ul>${keywords.map(k => `<li>${k}</li>`).join('')}</ul>`;
}