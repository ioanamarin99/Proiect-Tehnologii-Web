IF(DB_ID('FeedbackApp') IS NULL)
	CREATE DATABASE FeedbackApp
GO

use FeedbackApp
go

if object_id('Utilizator') is null
	create table Utilizator(
		IdUser int not null identity(1,1),
		ParolaUser nvarchar(30) not null,
		NumeUser nvarchar(30) not null,
		TipUser nvarchar(10) not null,
		constraint Pk_Users primary key(IdUser)
	)
go

if object_id('Activitate') is null
	create table Activitate(
		IdActivitate int not null identity(1,1),
		DescriereActivitate nvarchar(250) not null,
		DataActivitate datetime not null,
		DurataActivitate int not null
		constraint Pk_Activitate primary key(IdActivitate)
	)
go

if object_id('ActivitateUtilizator') is null
	create table ActivitateUtilizator(
		IdActivitate int not null,
		IdUser int not null,
		constraint Pk_ActivitateUser primary key(IdActivitate, IdUser)
	)
go

if object_id('Feedback') is null
	create table Feedback(
		IdFeedback int not null identity(1,1),
		DenumireFeedback nvarchar(20) not null,
		MomentFeedback datetime not null,
		IdUser int not null,
		IdActivitate int not null,
		constraint Pk_Feedback primary key(IdFeedback, IdUser, IdActivitate)
	)
go

if object_id('Utilizator_Ch1') is null
	alter table Utilizator add constraint Utilizator_Ch1 check (TipUser in('student','profesor'))
go

if object_id('Fk_ActivitateUtilizator_Utilizator') is null
	alter table ActivitateUtilizator add constraint Fk_ActivitateUser_Utilizator foreign key (IdUser) references Utilizator(IdUser)
go

if object_id('Fk_ActivitateUtilizator_Activitate') is null
	alter table ActivitateUtilizator add constraint Fk_ActivitateUtilizator_Activitate foreign key (IdActivitate) references Activitate(IdActivitate)
go

if object_id('Fk_Feedback_ActivitateUtilizator') is null
	alter table Feedback add constraint Fk_Feedback_ActivitateUtilizator foreign key (IdActivitate, IdUser) references ActivitateUtilizator(IdActivitate, IdUser)
go

/*if object_id('Fk_Feedback_Utilizator') is null
	alter table Feedback add constraint Fk_Feedback_Utilizator foreign key (IdUser) references Utilizator(IdUser)
go

if object_id('Fk_Feedback_Activitate') is null
	alter table Feedback add constraint Fk_Feedback_Activitate foreign key (IdActivitate) references Activitate(IdActivitate)
go*/
