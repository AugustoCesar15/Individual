create database TheBible;

use TheBible;

create table Usuario(
	idUsuario int auto_increment,
    Nome varchar(50),
    Email varchar(50),
	Senha varchar(50),
    primary key(idUsuario, Email)
);

create table Bio (
	idBio int primary key auto_increment,
    descricao varchar(100),
    fkUsuario int,
    fkEmail varchar(50),
    foreign key (fkUsuario, fkEmail) references Usuario (idUsuario, Email)
);

create table Post (
	idPost int primary key auto_increment,
    Titulo varchar(45),
    Descricao varchar(250),
    fkUsuario int,
    foreign key(fkUsuario) references Usuario (idUsuario)
);