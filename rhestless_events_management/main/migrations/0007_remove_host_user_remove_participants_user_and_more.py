# Generated by Django 4.1 on 2022-11-23 09:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_alter_addevent_options_alter_eventcategotry_options_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='host',
            name='user',
        ),
        migrations.RemoveField(
            model_name='participants',
            name='user',
        ),
        migrations.AddField(
            model_name='participants',
            name='address',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='participants',
            name='email',
            field=models.CharField(default='example@gmail.com', max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='participants',
            name='last_name',
            field=models.CharField(default='name', max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='participants',
            name='password',
            field=models.CharField(default='pass', max_length=100, null=True),
        ),
    ]
