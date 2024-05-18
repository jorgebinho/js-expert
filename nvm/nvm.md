- Permite escolher a versão de node para utilizar no projeto

nvm install xx -> instala a versão xx
nvm install --lts -> instala a versão long-term support
nvm list -> lista as versões que estão instaladas
nvm use xx -> utiliza a versão xx que já está instalada
nvm alias default xx -> define a versão padrão do Node.js do computador para ser a versão xx

criar nvmrc com a versão desejada e utilizar nvm use para ativar a versão

node -v > .nvmrc -> salva a versão atual e cria o arquivo