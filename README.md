# Antes, o que você irá precisar?

- Node >= 12.18
- PHP >= 7.2.5
- Composer >= 1.10.10
- Banco de dados MySQL ou PostgreSQL

## Use o comando:

```
git clone blablabla
```

# Como subir o backend?

1. Acesse a pasta api e utilize o comando `composer install` para instalar as dependências necessárias
2. Altere o arquivo .env.example nas seguintes linhas:

```
DB_CONNECTION=banco a ser utilizado
DB_HOST=127.0.0.1
DB_PORT=porta do banco de dados
DB_DATABASE=nome da base de dados
DB_USERNAME=usuario
DB_PASSWORD=senha
```

3. Renomeie o arquivo .env.example para .env
4. Execute o comando `php artisan migrate` para executar as migrations em seu banco de dados e criar as tabelas corretamente
5. Execute o comando `php artisan serve` para subir o servidor

# Como subir o frontend?

1. Use o comando `npm install` para instalar as dependências necessárias
2. Utilize o comando `npm start` para iniciar a aplicação em seu navegador
