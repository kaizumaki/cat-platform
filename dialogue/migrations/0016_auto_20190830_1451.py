# Generated by Django 2.1.10 on 2019-08-30 05:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dialogue', '0015_question_random'),
    ]

    operations = [
        migrations.AddField(
            model_name='payload',
            name='text',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='payload',
            name='state',
            field=models.CharField(default='text', max_length=20),
        ),
    ]