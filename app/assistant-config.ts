export let assistantId = "asst_xSWZjDoSvpDRJf5EXZUEOnV4"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
