# Generated by Django 3.0.4 on 2020-04-04 06:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('We_Driver_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='estacion',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('ubicacion', models.CharField(max_length=100)),
                ('fecha_registro', models.DateField(auto_now=True)),
                ('precio_galon', models.IntegerField(blank=True, default=0, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='usuario',
            fields=[
                ('email', models.EmailField(max_length=254, primary_key=True, serialize=False)),
                ('nombre', models.TextField()),
                ('password', models.TextField()),
            ],
        ),
        migrations.RenameField(
            model_name='camara',
            old_name='fecha_Registro',
            new_name='fecha_registro',
        ),
        migrations.AddField(
            model_name='camara',
            name='tipo_camara',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='camara',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]