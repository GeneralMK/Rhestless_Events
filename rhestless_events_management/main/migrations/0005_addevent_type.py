# Generated by Django 4.1 on 2022-11-03 07:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_host_email_host_name_host_password_alter_host_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='addevent',
            name='type',
            field=models.CharField(choices=[('Private', 'Private'), ('Public', 'Public')], max_length=200, null=True),
        ),
    ]
